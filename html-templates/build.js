const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');

var filesLess = [
    ['./src/_css/index.less', './build/css/styles.css'],
];
var filesScss = [
    ['./src/_css/index.scss', './build/css/styles2.css'],
];
var filesES6 = [
    ['./src/_js/script.js', './build/js/script.js'],
];

if(filesLess.length){
    var addonLess = require('./addons/less.js');
}
if(filesScss.length){
    var addonScss = require('./addons/scss.js');
}
if(filesES6.length){
    var addonBabel = require('./addons/babel.js');
}

function parseCSS(){
    if(filesLess.length){
        filesLess.forEach(function(itm) {
            addonLess(path.resolve(itm[0]), path.resolve(itm[1]));
        });
    }
    if(filesScss.length){
        filesScss.forEach(function(itm) {
            addonScss(path.resolve(itm[0]), path.resolve(itm[1]));
        });
    }
}

function parseJS(){
    if(filesES6.length){
        filesES6.forEach(function(itm) {
            addonBabel(path.resolve(itm[0]), path.resolve(itm[1]));
        });
    }
}

function renderPages(){
	fs.readdir(path.resolve('src','_html'),function(err, allPages){
		if(err){console.log(err); return;}

		allPages.filter((f)=>f[0]!=='_').forEach(function(file){
			ejs.renderFile(path.resolve('src', '_html', file), {}, {}, function(err, str){
				if(err){
					console.log(err);
				} else {
					var fname = path.basename(file, '.ejs')
					fs.writeFile(path.resolve('./build/'+fname+'.html'), str, function(err, res){
						if(err){
							console.log('Error creating /'+fname+'.html')
						} else {
							console.log('Created /'+fname+'.html')
						}
					});
				}
			});
		});
	})
}

function copyAssets(){
	fs.ensureDirSync('./build');
	fs.emptyDirSync('./build');
	fs.readdir('./src', function(err, files){
		if(err){console.log(err); return;}

		files.filter((f)=> f[0] !== '_').forEach(function(file){
			fs.copySync('./src/'+file, './build/'+file);
		});
	})
}

function build(params){
    switch (params) {
        case 'css':
            parseCSS();
            break;
    
        case 'js':
            parseJS();
            break;
    
        case 'html':
            renderPages();
            break;
    
        default:
            copyAssets();
            parseCSS();
            parseJS();
            renderPages();
            break;
    }
}

module.exports = build;