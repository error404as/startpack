const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');

module.exports = function(file_original, file_dist){
    babel.transformFile(file_original, {}, function (err, result) {
        if(err){ console.log(err); return }
        fs.ensureDirSync(path.dirname(file_dist));
        fs.writeFile(file_dist, result.code, function(err){
            if(err){ console.log(err); return; }
            console.log(file_dist+' - converted successfully!');
        });
    });
}
