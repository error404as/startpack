const fs = require('fs-extra');
const path = require('path');
const less = require('less');
const prefix = require('./autoprefixer');

module.exports = function(file_original, file_dist){

	fs.readFile(file_original, function(err,data){
		if(err){ console.log(err); return; }

		less.render( data.toString(), {
			paths: [path.dirname(file_original)],  // Specify search paths for @import directives
			compress: true
		}, function (err, result) {
			if(err){ console.log(err); return; }

			prefix(result.css, function(data) {
				fs.ensureDirSync(path.dirname(file_dist));
				fs.writeFile(file_dist, data, function(err){
					if(err){ console.log(err); return; }
					console.log(file_dist+' - converted successfully!');
				});
			});

		});
	});

}
