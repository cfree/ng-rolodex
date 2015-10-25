var mocks = mocks || {};

(function() {

	mocks.contactsServiceMock = function($q) {
		var sampleContacts = [
			{
				"_id":"6356",
				"firstName":"Craig",
				"lastName":"Freeman",
				"street1":"7 Juniper Lane",
				"city":"Naples",
				"zip":"34113",
				"state":"FL",
				"email":"craigfreeman@gmail.com",
				"country":"US",
				"phone":"2397757031"
			},
			{
				"_id":"4561",
				"firstName":"Kellee",
				"lastName":"Williams",
				"street1":"901 Front Street",
				"country":"US",
				"state":"CA",
				"city":"Laguna Beach",
				"zip":"90210",
				"phone":"8603540002",
				"email":"kellee@kelleesawesome.com"
			}
		];

		return {
			getContacts: getContacts,
			getContact: getContact,
			deleteContact: deleteContact,
			addContact: addContact,
			updateContact: updateContact
		};

		function getContacts() {
			return sampleContacts;
		}

		function getContact(id) {
			return sampleContacts[0];
		}

		function deleteContact(id) {
			return sampleContacts[0];
		}

		function addContact(contact) {
			return sampleContacts[0];
		}

		function updateContact(id, contact) {
			return sampleContacts[0];
		}

	};

	// module.exports = mocks;

})();


