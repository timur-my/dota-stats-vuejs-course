const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const app = express();
const config = require("./settings");
const { applyHbs } = require("./template");
const webpackConfig = require('../webpack.config.develop');
const compiler = webpack(webpackConfig);

applyHbs(app);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: false,
    noInfo: true
  })
);

app.use(webpackHotMiddleware(compiler));

app.get(["/api"], function(request, response) {
    response
        .header('Content-Type', 'application/json')
        .send(
          { text: 'Hello world!' }
        )
});

app.use(webpackHotMiddleware(compiler));

app.use(["/"], function(request, response) {
  response.render("index.hbs", {
    ...config
  });
});

app.listen(3000, () => console.log("Listening on port 3000!"));

module.exports = app;