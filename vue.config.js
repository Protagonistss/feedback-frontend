const devServerPort = 9801;
module.exports = {
  publicPath: "/",
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/development": {
        target: "http://development.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/development": ""
        }
      }
    }
  }
};
