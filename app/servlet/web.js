var router = require('./router');
var Server = require('./server');
var TestDatabase = require('../lib/test.database');

var InsertData = require('../../test/support.data/insert.data');
var data = require('../../test/support.data/mercy.database');

var server = new Server(router);
var database = new TestDatabase();

new InsertData().in(database).from(data);


server.useDatabase(database);

server.start();