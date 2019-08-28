const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: 'js/script.[hash].js',
    },
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new OptimizeCSSAssetsPlugin({}),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
});
