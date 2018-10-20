const debug = process.env.NODE_ENV !== 'production'
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/now': { page: '/now' }
    }
  }
})
