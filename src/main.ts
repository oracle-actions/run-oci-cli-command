/**
 * Copyright (c) 2021, 2024 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import * as core from '@actions/core'
import * as io from '@actions/io'
import * as exec from '@actions/exec'

import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

/**
 * Test if the content of a variable has a valid JSON structure
 */
function isJson(item: string): boolean {
  let value = typeof item !== 'string' ? JSON.stringify(item) : item
  try {
    value = JSON.parse(value)
  } catch {
    return false
  }

  return typeof value === 'object' && value !== null
}

/**
 * Install the OCI CLI (if ncessary) and then run the command specified by
 * the user workflow. By default, the action suppresses/masks the command
 * and output from the GitHub console and logs to avoid leaking confidential
 * data.
 *
 */
export async function runOciCliCommand(): Promise<void> {
  if (!fs.existsSync(path.join(os.homedir(), '.oci-cli-installed'))) {
    core.startGroup('Installing Oracle Cloud Infrastructure CLI')
    const cli = await exec.getExecOutput('python -m pip install oci-cli')

    if (cli && cli.exitCode == 0) {
      fs.writeFileSync(path.join(os.homedir(), '.oci-cli-installed'), 'success')
    }
    core.endGroup()
  }

  const cliBin = await io.which('oci', true)
  const cliArgs = core
    .getInput('command', { required: true })
    .replace(/^(oci\s)/, '')
    .trim()
  const jmesPath = core.getInput('query') ? `--query "${core.getInput('query').trim()}"` : ''
  core.info('Executing Oracle Cloud Infrastructure CLI command')
  const silent = core.getBooleanInput('silent', { required: false })

  const cliCommand = `${cliBin} ${jmesPath} ${cliArgs}`
  if (silent) core.setSecret(cliCommand)

  const cliResult = await exec.getExecOutput(cliCommand, [], { silent: silent })
  let output = ''
  let raw_output = ''

  if (cliResult && cliResult.exitCode == 0) {
    if (cliResult.stdout && isJson(cliResult.stdout)) {
      const stdout = JSON.parse(cliResult.stdout)
      output = JSON.stringify(JSON.stringify(stdout))
      if (Object.keys(stdout).length == 1) {
        raw_output = String(Object.values(stdout)[0])
      }
    } else {
      output = cliResult.stdout
      raw_output = cliResult.stdout
    }

    if (silent && output) core.setSecret(output)
    core.setOutput('output', output)

    if (silent && raw_output) core.setSecret(raw_output)
    core.setOutput('raw_output', raw_output)
  } else {
    if (cliResult.stderr && isJson(cliResult.stderr)) {
      const stderr = JSON.parse(cliResult.stderr)
      output = JSON.stringify(JSON.stringify(stderr))
    } else {
      output = cliResult.stderr
    }
    core.setFailed(`Failed: ${output}`)
  }
}
