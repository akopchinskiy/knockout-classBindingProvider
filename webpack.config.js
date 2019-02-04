const path = require("path");
const webpack = require("webpack");

module.exports = [
  // lib
  {
    mode: "production",
    devtool: "source-map",

    entry: `./src/knockout-classBindingProvider.js`,
    output: {
      filename: "knockout-classBindingProvider.min.js",
      path: path.resolve(__dirname, `./dist/`),
      library: "knockout-classBindingProvider",
      libraryTarget: "umd"
    },

    target: "web",

    module: {
      rules: [
        {
          test: /\.js?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"]
            }
          }
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        ko: {}
      })
    ],

    resolve: {
      extensions: [".js"],
      modules: ["node_modules"]
    },

    watch: true
  },
  // tests
  {
    mode: "development",
    devtool: "source-map",

    entry: `./spec/knockout-classBindingProvider.spec.js`,
    output: {
      filename: "test.bundle.js",
      path: path.resolve(__dirname, `./spec/`)
    },

    target: "web",

    module: {
      rules: [
        {
          test: /\.js?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"]
            }
          }
        }
      ]
    },

    plugins: [
      //   new webpack.DefinePlugin({
      //     ko: {}
      //   })
    ],

    resolve: {
      extensions: [".js"],
      modules: ["node_modules"]
    },

    watch: true
  }
];
