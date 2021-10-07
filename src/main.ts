/**
 * Copyright (c) 2021, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

import * as core from '@actions/core';
import * as io from '@actions/io';
import * as exec from '@actions/exec';

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

/**
 * Install the OCI CLI (if ncessary) and then run the command specified by
 * the user workflow. By default, the action suppresses/masks the command
 * and output from the GitHub console and logs to avoid leaking confidential
 * data.
 *
 */
async function runOciCliCommand(): Promise<void> {
  if (!fs.existsSync(path.join(os.homedir(), '.oci-cli-installed'))) {
    core.startGroup('Installing Oracle Cloud Infrastructure CLI');
    const cli = await exec.getExecOutput('python -m pip install oci-cli');

    if (cli && cli.exitCode == 0) {
      fs.writeFileSync(
        path.join(os.homedir(), '.oci-cli-installed'),
        'success'
      );
    }
    core.endGroup();
  }

  const cliBin = await io.which('oci', true);
  const cliArgs = core
    .getInput('command', {required: true})
    .replace(/^(oci\s)/, '')
    .trim();
  const jmesPath = core.getInput('query')
    ? `--query "${core.getInput('query').trim()}"`
    : '';
  const ociRegion = core.getInput('region')
    ? `--region "${core.getInput('region').trim()}"`
    : '';

  core.info('Executing Oracle Cloud Infrastructure CLI command');
  const silent = core.getBooleanInput('silent', {required: false});

  const cliCommand = `${cliBin} ${ociRegion} ${jmesPath} ${cliArgs}`;
  if (silent) core.setSecret(cliCommand);

  const cliResult = await exec.getExecOutput(cliCommand, [], {silent: silent});

  if (cliResult) {
    const stdout = cliResult.stdout ? JSON.parse(cliResult.stdout) : {};
    const stderr = cliResult.stderr ? JSON.stringify(cliResult.stderr) : '';

    if (cliResult.exitCode == 0) {
      const output = JSON.stringify(JSON.stringify(stdout));

      if (silent && output) core.setSecret(output);
      core.setOutput('output', output);

      if (Object.keys(stdout).length == 1) {
        const raw_output = stdout[0];
        if (silent && raw_output) core.setSecret(raw_output);
        core.setOutput('raw_output', raw_output);
      }
    } else {
      core.setFailed(`Failed: ${JSON.stringify(stderr)}`);
    }
  } else {
    core.setFailed('Failed to execute OCI CLI command.');
  }
}

/**
 * Requires OCI CLI environment variables to be set
 */
runOciCliCommand().catch(e => {
  if (e instanceof Error) core.setFailed(e.message);
});
