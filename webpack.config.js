const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.js', // JavaScript 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'bundle.js', // 输出文件名
    },
    mode: 'development',
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        hot: true,
    },
    target: 'web',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                removeComments: true,
            },
        }),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        minimize: false,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // 使用 Babel Loader 处理 JavaScript 文件
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-modules-commonjs',
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                        ]
                    },
                },
            },
            // JSON文件处理规则
            {
                test: /\.json$/,
                loader: 'json-loader', // 或者使用 'json-loader'，确保已安装该loader
                type: 'javascript/auto', // 这一行也可以加上，以支持ES6模块语法
            },
        ],
    },
};