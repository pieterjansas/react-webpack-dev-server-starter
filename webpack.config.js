
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    entry: {
        app: ["./src/index.js", "./src/styles/app.scss"]
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [{
                    loader: "css-loader"
                  }, {
                    loader: "sass-loader"
                  }],
                })),
              },
        ]
    }, 
    plugins:[
        extractSass
    ],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    watchOptions: {
        ignored: /node_modules/,
    },
}