const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10*1024 }
          },
          'image-webpack-loader'
        ]
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'something',
    template: path.resolve(__dirname, 'index.html'),
  })]
};
