module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .uses.clear()
      .end()
      .use('swc-loader')
      .loader('swc-loader')
  },
}
