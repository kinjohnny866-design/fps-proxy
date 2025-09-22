const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://peach.fps.ms:10162",
    changeOrigin: true,
  })
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Proxy działa na porcie ${port}`);
});
