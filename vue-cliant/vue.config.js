const path = require('path');

module.exports = {
  chainWebpack: config => {
    // home alias
    config.resolve.alias.set('~', path.resolve('./src'));
    config.resolve.alias.delete('@');

    // scss-resource-loader
    config.module.rule('scss').oneOfs.store.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [path.resolve('./src/assets/scss/index.scss')]
        })
        .end();
    });
  }
};
