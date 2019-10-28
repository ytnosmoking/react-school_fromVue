/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

import path from 'path'

module.exports = {
  chainWebpack(config, { webpack }) {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    config.resolve.alias.set('utils', path.resolve(__dirname, 'src/utils'))
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   }
  // },
  // lessLoaderOptions: {
  //   loader: 'style-resources-loader',
  //   options: {
  //     patterns: path.resolve(__dirname, './src/assets/less/func.less')
  //   }
  // }
};
