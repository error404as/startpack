const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname + '/public'),
        publicPath: '/',
        filename: 'js/script.js'
    },
    module: {
        rules: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), use: {
                loader: 'babel-loader'
            } },
            { test: /\.scss$/, use: [
                MiniCssExtractPlugin.loader,
                'css-loader', 'sass-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                },
            ] },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: './images/[name].[ext]' }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: './fonts/[name].[ext]' }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./js', './css']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
    ],
};
