module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@ui': './src/ui',
          '@hoc': './src/hoc',
          '@enum': './src/enum',
          '@store': './src/store',
          '@utils': './src/utils',
          '@const': './src/const',
          '@pages': './src/pages',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@context': './src/context',
          '@myTypes': './src/myTypes',
          '@svgs': './src/assets/svgs',
          '@images': './src/assets/images',
          '@lotties': './src/assets/lotties',
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
