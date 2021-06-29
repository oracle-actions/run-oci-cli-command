# run-oci-cli-command v1.0

This GitHub Action installs the OCI CLI and then runs the specified command.
This action will automatically cache the OCI CLI install to speed up any
subsequent steps that use this action.

## Dependency requirement

This action depends on the use of the [`oracle-actions/configure-oci-credentials@v1.0`][1]
action in a prior step to configure the required OCI credentials.

## Inputs

* `command`: (Required) The command and arguments to provide to the oci tool.
  Most commands must specify a service, followed by a resource type and then
  an action, e.g. `iam user list --compartment-id "<compartment-ocid>"`
* `query`: (Optional) [JMESPath query](http://jmespath.org/) to run on the
  response JSON before output.
* `region`: (Optional) The region to make calls against.  For a list of valid
  region names use the command: `iam region list`.

### Output masking

By default, the output(s) from the command are masked from the GitHub Actions log
and GitHub console, to prevent leaking any credential or confidential information.
The following option allow you to disable that masking for debugging purposes:

* `silent`: (Optional; default: _true_) If set to _false_ the  action will
  not mask or suppress the command or outputs from the logs or console.

_Oracle recommends you only disale this option for debugging purposes._

## Outputs

* `output`: will contain the results of the command in JSON format.
* `raw_output`: if the output of a given query is a single string value, this
  will return the string without surrounding quotes.

## Sample workflow

```yaml
jobs:
  my-instances:
    runs-on: ubuntu-latest
    name: List the display name and shape of the instances in my compartment
    steps:
      - name: Configure OCI Credentials
        uses: oracle-actions/configure-oci-credentials@v1
        with:
          user: ${{ secrets.OCI_USER }}
          fingerprint: ${{ secrets.OCI_FINGERPRINT }}
          private_key: ${{ secrets.OCI_PRIVATE_KEY }}
          tenancy: ${{ secrets.OCI_TENANCY }}
          region: 'us-ashburn-1'

      - name: Retrieve the OCID of a named compartment in tenancy
        uses: oracle-actions/run-oci-cli-command@v1
        id: get-compartment-ocid
        with:
          command: 'iam compartment list'
          jmespath: "data[?name=='my-compartment'].id"

      - name: Retrieve the display name and shape of the instances in my compartment
        uses: oracle-actions/run-oci-cli-command@v1
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

Copyright (c) 2021 Oracle and/or its affiliates.

Released under the Universal Permissive License v1.0 as shown at
<https://oss.oracle.com/licenses/upl/>.

[1]: http://github.com/oracle-actions/configure-oci-credentials
