
// Include the cluster module
var cluster = require('cluster');

// Number of core
var cCPUs   = require('os').cpus().length;

// Code to run if we're in the master process
if (cluster.isMaster) {

	for( var i = 0; i < cCPUs; i++ ) {
		cluster.fork();
	}

	cluster.on( 'online', function( worker ) {
		console.log( 'Worker ' + worker.process.pid + ' is online.' );
	});

	cluster.on( 'exit', function( worker, code, signal ) {
		console.log( 'worker ' + worker.process.pid + ' died.' );
	});


// Code to run if we're in a worker process
} else {
		// Include Express
		var express = require('express');

		// Create a new Express application
		var app = express();

		// Add a basic route – index page
		app.get('/', function (request, response) {
				console.log('Request to worker %d', cluster.worker.id);
				 for (var a = 0; a < 999999; a++) {
						// this is pretty wasteful
					}
				response.send('Hello from Worker');
		});

		// Bind to a port
		app.listen(3000);
		console.log('Worker %d running!', cluster.worker.id);

}
