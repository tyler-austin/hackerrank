module.exports = {
  hooks: {
    precommit: 'lint-staged',
    'commit-msg': 'validate-commit-msg'
  }
};
