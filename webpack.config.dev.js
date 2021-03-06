import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; 

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', 
      inject: true //injects script tag 
      //more options available to minify - see course repo
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['babel']
      },
      {
        test: /\.css$/, 
        loaders: ['style','css']
      }
    ]
  }
}
