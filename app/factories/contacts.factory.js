(function() {
	'use strict';
	
	angular.module('rdApp')
		.factory('contactsService', contactsService);

	function contactsService($http, $q) {
		var retrieveContacts = function() {
			return $http({
				method: 'GET',
				url: '/api/contacts/'
			});
		};

		var retrieveContact = function(id) {
			return $http({
				method: 'GET',
				url: '/api/contacts/' + id
			});	
		};

		var removeContact = function(id) {
			return $http({
				method: 'DELETE',
				url: '/api/contacts/' + id
			});		
		};

		var addContact = function(contact) {
			return $http({
				method: 'POST',
				url: '/api/contacts/',
				data: contact
			});	
		};

		var updateContact = function(id, contact) {
			return $http({
				method: 'PUT',
				url: '/api/contacts/' + id,
				data: contact
			});	
		};

		return {
			getContacts: function() {
				return retrieveContacts();
			},
			getContact: function(id) {
				return retrieveContact(id);
			},
			deleteContact: function(id) {
				return removeContact(id);
			},
			addContact: function(contact) {
				return addContact(contact);
			},
			updateContact: function(id, contact) {
				return updateContact(id, contact);
			}
		};
	}

})();
