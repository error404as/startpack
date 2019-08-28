const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = function(css, cb){

	postcss([ autoprefixer ]).process(css, { from: undefined }).then(function (result) {
        if(typeof cb === 'function'){
            cb(result.css);
        }
    });

};
