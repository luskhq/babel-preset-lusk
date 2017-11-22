module.exports = {
  presets: [
    [
      require('babel-preset-env'),
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7'],
        },
      },
    ],
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-ramda').default,
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-syntax-dynamic-import'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
};
