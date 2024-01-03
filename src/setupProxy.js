const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
        target: 'http://111.230.80.254:8000',
        changeOrigin: true,
        pathRewrite: {
          	"^/api": "/api"
    	}
    }),
  )
}
