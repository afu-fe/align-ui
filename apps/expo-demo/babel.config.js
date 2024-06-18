module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "align-ui": "../../packages/align-ui/src",
          },
        },
      ],
    ],
  };
};
