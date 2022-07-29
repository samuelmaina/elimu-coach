const { createProxyMiddleware } = require("http-proxy-middleware");

const TARTGET_URL = "http://localhost:5000";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: TARTGET_URL,
      changeOrigin: true,
    })
  );
};
