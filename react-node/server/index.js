const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json({limit: '3mB'}));
app.use(bodyParser.urlencoded({ limit: '3mB', extended: true }));
app.use(express.static(__dirname + '/../public'));

module.exports = {
    start: (port = 3000) => {
        require('./router')(app);

        app.listen(port);
        console.log(`Server http://localhost:${port}/ is running.`);
    }
};
