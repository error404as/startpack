const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'browser-bundle.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devtool: 'source-map',
    mode: 'development',
    watch: true,
};
