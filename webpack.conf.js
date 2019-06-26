const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: "./public/main.js",
        login: "./public/javascript/login.js"
    }, //已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'[name].[chunkhash].js'
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000,
        inline:true,
        index:'index.html'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin, new HtmlWebpackPlugin({
        path: path.join(__dirname, 'view'),
        filename: 'login.html',
        template: './view/login/index.html',
        chunks: ['login'],
        hash: true,
        minify: false,
        xhtml: true,
    })],
}