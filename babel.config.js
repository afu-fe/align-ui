module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'lodash',
    [
      'module-resolver',
      {
        alias: {
          'align-ui': './src',
        },
      },
    ],
  ],
}
