module.exports = {
  root: true,
  plugins: ['prettier'], // prettier 一定要是最后一个，才能确保覆盖
  rules: {
    'prettier/prettier': 'error',
  },
  extends: ['@react-native', 'plugin:prettier/recommended'],
};
