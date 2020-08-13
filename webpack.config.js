const path = require('path');

const filename = 'bundle.js';
const outputDir = path.resolve(__dirname, 'public');
const contentDir = path.resolve(__dirname, 'frontend');

module.exports = {
  entry: path.join(contentDir, 'Index.jsx'),
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: outputDir,
    disableHostCheck: true,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://app:3000',
    }
  },
};
