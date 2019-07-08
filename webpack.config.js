module.exports = {
  entry: ["./src/app.ts", "./style/index.scss"],
  module: {
    loaders: [],
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
        },
        ],
      },
      {
        loader: "nunjucks-loader",
        test: /\.(njk|nunjucks)$/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
};
