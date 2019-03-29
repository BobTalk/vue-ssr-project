let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let merge = require('webpack-merge')
let base = require('./webpack.base.js')
module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, '../src/app.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
})