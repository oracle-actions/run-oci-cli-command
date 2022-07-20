# run-oci-cli-command v1.0

This GitHub Action installs the OCI CLI and then runs the specified command.
This action will automatically cache the OCI CLI install to speed up any
subsequent steps that use this action.

## Required environment variables

The following [OCI CLI environment variables][1] must be defined for at least
the `run-oci-cli-command` task:

* `OCI_CLI_USER`
* `OCI_CLI_TENANCY`
* `OCI_CLI_FINGERPRINT`
* `OCI_CLI_KEY_CONTENT`
* `OCI_CLI_REGION`

We recommend using GitHub Secrets to store these values. If you have more than
one `run-oci-cli-command` task, consider [defining your environment variables][2] at
the job or workflow level.

## Inputs

* `command` (required): the [command and arguments][3] to provide to the `oci` tool.
* `query`: (optional) a [JMESPath query](http://jmespath.org/) to run on the
  response JSON before output.

### Output masking

By default, the output(s) from the command are masked from the GitHub Actions log
and GitHub console, to prevent leaking any credential or confidential information.
The following option will disable that masking and is intended for debugging
purposes only:

* `silent`: (Optional; default: _true_) If set to _false_ the  action will
  not mask or suppress the command or outputs from the logs or console.

> **Note:** the output does not need to be visible in the log to be used as an
> input by another task.

## Outputs

* `output`: will contain the results of the command in JSON format.
* `raw_output`: if the output of a given query is a single string value, this
  will return the string without surrounding quotes.

> **Note:** filtering the `output` or `raw_output` by piping it through another
> tool like `jq` may result in the filtered output being visible in the job
> logs. _Using a JMESPath query to filter results is recommend instead_.

## Sample workflow

```yaml
jobs:
  my-instances:
    runs-on: ubuntu-latest
    name: List the display name and shape of the instances in my compartment
    env:
      OCI_CLI_USER: ${{ secrets.OCI_CLI_USER }}
      OCI_CLI_TENANCY: ${{ secrets.OCI_CLI_TENANCY }}
      OCI_CLI_FINGERPRINT: ${{ secrets.OCI_CLI_FINGERPRINT }}
      OCI_CLI_KEY_CONTENT: ${{ secrets.OCI_CLI_KEY_CONTENT }}
      OCI_CLI_REGION: ${{ secrets.OCI_CLI_REGION }}
    steps:
      - name: Retrieve the OCID of a named compartment in tenancy
        uses: oracle-actions/run-oci-cli-command@v1
        id: get-compartment-ocid
        with:
          command: 'iam compartment list'
          jmespath: "data[?name=='my-compartment'].id"

      - name: Retrieve the display name and shape of the instances in my compartment
        uses: oracle-actions/run-oci-cli-command@v1.0
        id: find-my-instances-instances
        with:
          command: 'compute instance list --compartment-id ${{ steps.compartment-ocid.get-compartment-ocid.raw_output }}'
          jmespath: 'data[*].{name: \"display-name\", shape: shape}'

      - name: List the display name and shape of the instances in my compartment
        run: |
          echo ${{ steps.find-my-compartment-instances.outputs.output }} | jq .
```

See [`action.yml`](./action.yml) for more details.

## Contributing

We welcome contributions from the community. Before submitting a pull
request, please [review our contribution guide](./CONTRIBUTING.md).

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security
vulnerability disclosure process.

## License

Copyright (c) 2021, 2022, Oracle and/or its affiliates.

Released under the Universal Permissive License v1.0 as shown at
<https://oss.oracle.com/licenses/upl/>.

[1]: https://docs.oracle.com/en-us/iaas/Content/API/SDKDocs/clienvironmentvariables.htm
[2]: https://docs.github.com/en/actions/learn-github-actions/environment-variables
[3]: https://docs.oracle.com/en-us/iaas/tools/oci-cli/3.2.0/oci_cli_docs/
