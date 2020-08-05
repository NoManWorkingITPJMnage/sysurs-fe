module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
};

if (process.env.npm_lifecycle_script !== 'vue-cli-service build') {
  module.exports.plugins = [
    ['istanbul', { useInlineSourceMaps: false }],
  ];
}
