"use strict";

const path = require("path");

module.exports = {
  mode: "production",

  entry: {
    main: path.resolve("./src/js/index.js"),
    write: path.resolve("./src/js/write.js"),
    login:path.resolve("./src/js/login.js"),
    register:path.resolve("./src/js/register.js"),
  },

  output: {
    filename: "js/[name].js",
    path: path.resolve("./dist")
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    }]
  },
 
};