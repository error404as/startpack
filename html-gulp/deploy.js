const fs = require('fs');
const SftpUpload = require('sftp-upload');
const DEPLOY = require('./deploy.config.json');
const FILES = require('./deploy.track.js')();

let options = Object.assign({},DEPLOY);
options.path = FILES;
options.privateKey = fs.readFileSync(options.privateKey);
options.passphrase = fs.readFileSync(options.passphrase, 'utf8');

new SftpUpload(options)
    .on('error', function(err) { throw err; })
    .on('uploading', function(progress) {
        console.log('Uploading', progress.file);
        //console.log(progress.percent+'% completed');
    })
    .on('completed', function() {
        console.log('Upload Completed');
        DEPLOY.since = new Date();
        fs.writeFileSync('./deploy.config.json', JSON.stringify(DEPLOY, '', 2), 'utf8');
    
    })
    .upload();
