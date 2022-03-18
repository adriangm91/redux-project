const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', //especificar el entry point
  mode: 'development', //modo desarrollo
  module: { //modulo de webpack
    rules:[
      {
        test: /\.(js|jsx)$/, //expresion regular
        exclude: /(node_modules)/, // excluir los modulos
        loader: 'babel-loader',
        options: {
          presets:['@babel/env']
        }
      },
      {
        test: /\.css/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".jsx", ".json"]
  },
  output: { 
    path: path.join(__dirname,'dist/'),//__dirname es una variable que apunta al proyecto
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname,'public/'),
    port:3000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};