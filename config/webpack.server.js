let merge = require('webpack-merge')
let base = require('./webpack.base.js')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let path = require('path')
module.exports = merge(base, {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, "../src/server-entry.js")
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: path.resolve(__dirname, '../public/index.ssr.html'),
            excludeChunks: ["server"]
        })
    ]
})