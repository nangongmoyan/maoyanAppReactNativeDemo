module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['lodash'],
    [
      require.resolve('module-resolver'),
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
        '@ui': './src/ui',
        '@hoc': './src/hoc',
        '@utils': './src/utils',
        '@pages': './src/pages',
        '@types': './src/types',
        '@styles': './src/styles',
        '@components': './src/components',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
