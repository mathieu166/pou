
function Server(router) {
	this.router = router;
}

Server.prototype.useDatabase = function(db){
    this.database = db;
};


Server.prototype.start = function() {
    var router = this.router;
    var database = this.database;

    this.server = require('http').createServer(function(request, response) {
        router.endPointOf(request)(request, response, database);
    }).listen(3000);

    console.log('Server listening on ' + (3000));
};

Server.prototype.stop = function() {
	this.server.close();
};

module.exports = Server;