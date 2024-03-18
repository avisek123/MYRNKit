module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          'assets/images': './src/assets/images',
          utils: './src/utils',
          components: './src/components',
          'components/core': './src/components/core',
          types: './src/types',
          configs: './src/configs',
          contexts: './src/contexts',
          hooks: './src/hooks',
          navigations: './src/navigations',
          screens: './src/screens',
          constant: './src/constant',
          styles: './src/styles',
          features: './src/features',
          services: './src/services',
          translations: './src/translations',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],

  env: {
    development: {
      plugins: [['@babel/plugin-transform-react-jsx', {runtime: 'classic'}]],
    },
  },
};
