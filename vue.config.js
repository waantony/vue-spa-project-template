const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const pxtorem = require('postcss-pxtorem')
const getPages = require('./configs/getPages')

// 环境变量获取
const { VUE_APP_baseURL, NODE_ENV, VUE_APP_PLAT } = process.env

// 是否是生产环境
const isProduction = NODE_ENV === 'production'
const isPC = VUE_APP_PLAT === 'PC'

// 访问绝对路径
const pathJoin = dir => path.join(__dirname, dir)

module.exports = {
  pages: getPages('src/pages/*'), // 多页配置
  lintOnSave: 'warning',
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack (config) {

    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': pathJoin('src'),
      },
    }

    // 从外部引入的库，比如在 index.html 中引入 cdn 地址
    config.externals = {
      // key 表示 import x from 'key'
      // value 表示外部引入的库暴露的全局变量名
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'vant': 'vant',
      'element-ui': 'ELEMENT',
      // 'BMap': 'BMap',
      // 'echarts': 'echarts',
      // 'videojs': 'videojs',
      // 'lodash': '_',
      // 'qq': 'qq',
      // 'wx': 'wx',
      // 'callapp-lib': 'CallApp',
      // 'xlsx': 'XLSX',
    }

    // 生产环境配置
    if (isProduction) {

      // 打包分析
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static', // static | disabled
        openAnalyzer: false,
      }))

      // 启用 gzip 压缩插件
      config.plugins.push(new CompressionWebpackPlugin({
        test: /\.js$|\.html$|\.css$/u,
        threshold: 4096, // 超过 4kb 压缩
      }))

      // terser 去除 console 和 debugger
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true

    }
  },
  // webpack chain
  chainWebpack (config) {
    const addStyleResource = rule => {
      rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            pathJoin('src/styles/variables.scss'),
            pathJoin('src/styles/mixins.scss'),
          ],
        })
    }
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        target: VUE_APP_baseURL,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: isPC
          ? []
          : [
            pxtorem({
              rootValue: 100,
              propList: ['*'],
            }),
          ],
      },
    },
  },
}
