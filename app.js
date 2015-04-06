var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	contacts = require('./server/routes/contacts'),
	app = express();

// Connect to the database
mongoose.connect('mongodb://localhost/rolodex', function(err) {
	if (err) {
		console.log('Database Connection Error', err);
	} else {
		console.log('Database Connection Successful');
	}
});

// For parsing application/json
app.use(bodyParser.json());

// API route
app.use('/api/contacts', contacts);

// Route for static files
app.use('/app', express.static(__dirname + '/public/app'));
app.use('/assets', express.static(__dirname + '/public/assets'));

// Default route
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/public/main.html');
});

// Fire it up
var server = app.listen(3000, function() {
  	console.log('Rolodex is listening at http://localhost:%s', server.address().port);
});
