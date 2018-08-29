// Include Express
var express = require('express');

// Create a new Express application
var app = express();

// Add a basic route – index page
app.get('/', function (request, response) {
	console.log('Request to server');
	for (var a = 0; a < 999999; a++) {
		// this is pretty wasteful
	}
	
	response.send('Hello from Worker');
});

// Bind to a port
app.listen(3000, function(){
	console.log("server listing PORT 3000")
});

