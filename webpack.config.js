const path = require('path');

const conf = {
   entry: "./src/js/app.js",
   output: {
      path: path.resolve(__dirname, "dist/js"),
      filename: "main.js",
      publicPath: "dist/js"
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: "babel-loader"
         },
         {
            test: /\.css$/,
            loader: "style-loader!css-loader"
         }
      ]
   },
   devServer: {
      overlay: true
   }
};

module.exports = conf;