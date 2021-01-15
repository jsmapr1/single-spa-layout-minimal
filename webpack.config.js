const path = require("path");

module.exports = (env) => ({
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "build.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
    ],
  },
});
