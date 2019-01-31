const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV !== 'development';
const output = isProd ? 'build' : 'public';

module.exports = {
  mode: ENV,
  entry: {
    main: ['./src/js/main.js', './src/scss/main.scss']
  },
  output: {
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, output)
  },
  plugins: [
    new htmlPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ].concat(
    isProd
      ? [new CopyWebpackPlugin([{ from: '**/*', to: '.', context: 'public' }])]
      : []
  ),
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')({ grid: true })].concat(
                isProd ? [require('css-mqpacker'), require('cssnano')] : []
              )
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter()
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: '0.0.0.0',
    historyApiFallback: true,
    useLocalIp: true
  }
};
