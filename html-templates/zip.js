var fs = require('fs');
var archiver = require('archiver');

var ftail = dateStamp(new Date());
console.log('html'+ ftail +'.zip');

var output = fs.createWriteStream(__dirname + '/html'+ ftail +'.zip');
var archive = archiver('zip', {
    zlib: { level: 9 }
});
 
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

output.on('end', function() {
  console.log('Data has been drained');
});
 
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') { } else { throw err; }
});
 
archive.on('error', function(err) { throw err; });
 
archive.pipe(output);

var filesAll = fs.readdirSync('./build');
var files = []
var dirs = []
filesAll.forEach(function(itm) {
	if(fs.statSync('./build/'+itm).isFile()){
		files.push(itm);
	} else {
		dirs.push(itm);
	}
});
files.forEach(function(itm) {
	archive.append(fs.createReadStream('build/'+itm), { name: itm });
});

dirs.forEach(function(itm) {
	archive.directory('build/'+itm, itm);
});

archive.finalize();




function dateStamp(t){
	// YYYY-MM-DD__HH-MM-SS
	var str = '-['+t.getFullYear();
	str += '-'+_zero(t.getMonth()+1);
	str += '-'+_zero(t.getDate());
	str += ']-'+_zero(t.getHours());
	str += ''+_zero(t.getMinutes());
	str += ''+_zero(t.getSeconds());
	return str;
}
function _zero(i){
	return i > 9 ? i : '0'+i;
}
