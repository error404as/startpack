var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json({limit: '3mB'}));
app.use(bodyParser.urlencoded({ limit: '3mB', extended: true }));
app.use(express.static('public'));

app.get('/api/data', function(req,res){
    fs.readFile('./data/data.json', 'UTF-8', function(err, data) {
        if(err){ console.log(err); res.end(); return; }
        data = JSON.parse(data);
        res.json(data);
    });
});

app.listen(3000);
console.log('Server http://localhost:3000/ is running.');
