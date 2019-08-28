const path = require('path');
const helpers = require('./helpers.js');

let db = require('./db');

module.exports = (app) => {

    app.get('/', route.home);
    
    app.get('/api/lists', route.apiLists);
    
    app.get('*', route.home);
};


const route = {
    notFound(req, res) {
        res.status(404);
        res.end('');
    },
    home(req, res) {
        res.sendFile(path.resolve(__dirname, '../public/index.html'), {}, (err)=>{
            if(err) { console.log(err); }
        });
    },
    apiLists(req, res) {
        setTimeout(() => {
            res.json(['123', 'abcd', 'hello'])
        }, 500);
    },

};

