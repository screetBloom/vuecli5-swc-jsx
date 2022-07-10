module.exports = {
  chainWebpack: (config) => {
    const opts = {
      jsc: {
        parser: {
          syntax: 'ecmascript',
          jsx: true,
          dynamicImport: true,
        },
        transform: {
          react: {
            // "pragma": "h"
            runtime: 'automatic',
            importSource: '@lancercomet/vue2-jsx-runtime',
            throwIfNamespace: false,
          },
        },
      },
    }

    config.module
      .rule('js')
      .uses.clear()
      .end()
      .use('swc-loader')
      .loader('swc-loader')
      .options(opts)
  },
}
