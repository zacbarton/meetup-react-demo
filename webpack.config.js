var path = require('path');
var webpack = require('webpack');

// Define common paths.
var paths = {
  src: path.resolve(__dirname, 'src'),
  nodeModules: path.resolve(__dirname, 'node_modules'),
};

// Define common webpack config between development and production.
module.exports = {
  context: paths.src,
  entry: {
    html: './index.html',
    app1: './1.hello-world.js',
    app2: './2.state.js',
    app3: './3.state-with-interval.js',
    app4: './4.state-with-interval-and-style.js',
    app5: './5.nested-components.js',
  },
  output: {
    filename: '[name].js',
    path: paths.build,
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader?cacheDirectory',
        ],
      },
    ],
  },
  resolve: {
    // '' allows you to import without specifying the .js extension.
    extensions: ['', '.js'],
    root: [
      paths.src,
      paths.nodeModules,
    ],
  },
  plugins: [
    // Name modules on HMR updates.
    new webpack.NamedModulesPlugin(),
    // Dont choke on errors
    new webpack.NoErrorsPlugin(),
  ],
  devtool: '#cheap-module-eval-source-map',
  // @see https://webpack.github.io/docs/webpack-dev-server.html
  devServer: {
    host: '0.0.0.0',
    port: '3200',
    contentBase: './src',
    historyApiFallback: true,
    noInfo: true,
  },
};
