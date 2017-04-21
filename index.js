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
    require('babel-plugin-ramda'),
    require('babel-plugin-transform-decorators-legacy'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
};
