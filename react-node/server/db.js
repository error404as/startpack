const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const helpers = require('./helpers.js');

function _mid(id) {
    return typeof id === 'string' ? new mongo.ObjectID(id) : id;
}

let db;

(() => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
        if(err) {
            console.log(err);
            process.exit();
        }
        
        db = client.db('main');
        
        console.log('Connected to MongoDB');
    });
})();



let db_actions = {
    get(fn) {
        db.collection('list').find({}).toArray((err, res) => {
            if(err) { console.log(err); fn({error: err}); return }

            fn(res);
        });
    },
};

module.exports = db_actions;
