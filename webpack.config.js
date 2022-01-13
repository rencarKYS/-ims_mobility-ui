const path = require('path');
const fs = require('fs')
let files = []
fs.readdir('./components', (err, files) => {
  const result = files.filter(file => file !== 'index.js')
  
})

module.exports = {
  mode: 'production',
  entry: {
    app: './index.js',
    'lib/Input/index': './components/Input',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
    libraryTarget: 'umd',
  },
};