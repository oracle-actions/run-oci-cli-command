const Configuration = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://github.com/oracle-actions/.github/blob/main/CONTRIBUTING.md#commit-messages',
  rules: {
    'signed-off-by': [1, 'always', 'Signed-off-by:']
  }

}

module.exports = Configuration;
