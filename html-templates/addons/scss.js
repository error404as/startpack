const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const prefix = require('./autoprefixer');

module.exports = function(file_original, file_dist){

    sass.render({
        file: file_original,
        outputStyle: 'compressed' //nested, expanded, compact, compressed
    }, function(err, result) {
        if(err){ console.log(err); return }

        prefix(result.css, function(data) {
            fs.ensureDirSync(path.dirname(file_dist));
            fs.writeFile(file_dist, data, function(err){
                if(err){ console.log(err); return; }
                console.log(file_dist+' - converted successfully!');
            });
        });
    });

}
