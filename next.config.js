const debug = process.env.NODE_ENV !== 'production'
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  pageExtensions: ['jsx'],
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/gallery': { page: '/gallery' },
      '/now': { page: '/now' },
      '/links': { page: '/links' }
    }
  }
})
