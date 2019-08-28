//process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

const server = require('./server');

server.start(3000);
