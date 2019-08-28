const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
        poll: 1000,
        ignored: ['node_modules']
   },
});
