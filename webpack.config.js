const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    catalog: './src/components/catalog.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, './src/components/catalog-page/assets'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html', 
    }),
    new HtmlWebpackPlugin({
      template: './src/components/catalog-page.html',
      filename: 'catalog-page.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
