const fs = require('fs');
const path = require('path');
const DEPLOY = require('./deploy.config.json');
const SINCE = new Date(DEPLOY.since);

let FILES = [];

function parse(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    paths.forEach(_path_ => {
        var currentFile = path.resolve(_path_);
        var fileExists = fs.existsSync(currentFile);
        if(fileExists){
            var stats = fs.statSync(currentFile);

            if(stats.isFile()){
                if(stats.mtime > SINCE){
                    FILES.push(currentFile);
                }
            } else {
                var files = fs.readdirSync(_path_);
                parse( files.map(el => path.resolve(currentFile, el)) );
            }
        }
    }); 
}

if(!module.parent){
    parse(DEPLOY.path);
    if(FILES.length){
        console.log(FILES.join('\n'));
        console.log(`\n# ${FILES.length} files changed since ${DEPLOY.since}`);
        console.log('#> npm run deploy:true \n');
    } else {
        console.log(`Nothing changed since ${DEPLOY.since} \n`);
    }
}

module.exports = () => {
    FILES = [];
    parse(DEPLOY.path);
    return FILES;
}
