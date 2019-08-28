const watch = require('node-watch');
const express = require('express');
const bodyParser = require('body-parser');

const builder = require('./build');

const app = express();
app.use(bodyParser.json({limit: '3mB'}));
app.use(bodyParser.urlencoded({ limit: '3mB', extended: true }));

app.use(express.static(__dirname + '/build'));

app.listen(3001, 'localhost');
console.log('Server http://localhost:3001/ is running. Static server');

 
watch('./src/', { recursive: true }, function(e, fn) {
	console.log('\nFile changed: '+fn);

	var option = ''; // css, pages
	if(fn.match(/[\\/]_css[\\/]/)){
		option = 'css';
	} else if(fn.match(/[\\/]_js[\\/]/)){
		option = 'js';
	} else if(fn.match(/[\\/]_html[\\/]/)) {
		option = 'html';
	}

	build_wait(option);
});
console.log('Watching...');


var build_wait = debounce(function(params){
	if(params) {
		console.log('Rebuilding #'+ params);
	} else {
		console.log('Full rebuild');
	}

	builder(params);
}, 250);

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


builder();
