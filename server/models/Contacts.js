var mongoose = require('mongoose'),
	ContactsSchema = new mongoose.Schema({
		firstName: String,
		lastName: String,
		street1: String,
		street2: String,
		city: String,
		state: String,
		zip: String,
		country: String,
		phone: String, // format: +1-555-555-5555
		email: String,
		updatedAt: {type: Date, default: Date.now}
	});

// Register model
module.exports = mongoose.model('Contacts', ContactsSchema);
