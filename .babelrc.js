module.exports = function (api) {
  const plugins = [];

  const presets = [['@babel/preset-env', { targets: { node: 10 } }], '@babel/preset-typescript'];

  if (api.env('coverage')) plugins.push('babel-plugin-istanbul');

  return { plugins, presets };
};
