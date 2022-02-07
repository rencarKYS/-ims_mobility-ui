const path = require('path');
const fs = require('fs')
let entry = {
  index: './components/index.tsx',
  'rencar/index': './components/rencar/index.tsx',
  'form/index': './components/form/index.tsx',
}

const filenames = fs.readdirSync(`./components/${process.env.CLIENT}`);
const result = filenames.filter(file => file !== 'index.tsx')
result.forEach(file => {
  entry[`${process.env.CLIENT}/${file}/index`] = `./components/${process.env.CLIENT}/${file}`
})

console.log(entry)

module.exports = {
  mode: 'development',
  entry,
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
      root: "styled-components",
    }
  },
  devServer: {
    hot: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    // clean: true
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

