const path = require('path');
const fs = require('fs')
let entry = {index: './index.js'}

const filenames = fs.readdirSync('./components');
const result = filenames.filter(file => file !== 'index.js')
result.forEach(file => {
  entry[`lib/${file}/index`] = `./components/${file}`
})

module.exports = {
  mode: 'production',
  entry,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    hot: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ]
  }
};

