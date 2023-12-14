module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@ui': './src/ui',
          '@hoc': './src/hoc',
          '@utils': './src/utils',
          '@const': './src/const',
          '@pages': './src/pages',
          '@types': './src/types',
          '@styles': './src/styles',
          '@svgs': './src/assets/svgs',
          '@images': './src/assets/images',
          '@navigation': './src/navigation',
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
