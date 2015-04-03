var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Contacts = require('../models/Contacts.js');

/**
 * API endpoints
 */

// List
router.get('/', function(req, res, next) {
	// Retrieve Contacts
	Contacts.find(function(err, contactsList) {
		if (err) {
			return next(err);
		}
		
		// Serve up fresh contacts
		res.json(contactsList);
	});
});

// Create
router.post('/', function(req, res, next) {
	console.log(req.body);
	// Make a new record
	Contacts.create(req.body, function(err, newContact) {
		if (err) {
			return next(err);
		}

		// Return results
		res.json(newContact);
	});
});

// Retrieve
router.get('/:id', function(req, res, next) {
	// Grab a specific record
	Contacts.findById(req.params.id, function(err, singleContact) {
		if (err) {
			return next(err);
		}

		// Show me the result
		res.json(singleContact);
	});
});

// Update
router.put('/:id', function(req, res, next) {
	console.log('new');
	console.log(req.body);
	// Edit a specific record
	Contacts.findByIdAndUpdate(req.params.id, req.body, function(err, updatedContact) {
		if (err) {
			return next(err);
		}

		console.log('response');
		console.log(req.body);

		// Updated!
		res.json(updatedContact);
	});
});

// Delete
router.delete('/:id', function(req, res, next) {
	// Scratch a record
	Contacts.findByIdAndRemove(req.params.id, req.body, function(err, deletedContact) {
		if (err) {
			return next(err);
		}

		// Removed!
		res.json(deletedContact);
	});
});

// Register endpoints
module.exports = router;
