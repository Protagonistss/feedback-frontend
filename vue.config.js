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
      },
      "/prod": {
        target: "http://production.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/prod": ""
        }
      }
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        "console.log"
      ];
    }
  }
};
