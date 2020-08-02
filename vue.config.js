const apiMocker = require('mocker-api');
const path = require('path');

module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  configureWebpack: {
    devServer: {
      before(app) {
        apiMocker(app, path.resolve('./mock/index.js'), {
          changeHost: true,
        });
      },
    },
  },
};
