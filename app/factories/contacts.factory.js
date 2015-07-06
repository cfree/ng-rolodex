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

		return {
			getContacts: function() {
				return retrieveContacts();
			},
			getContact: function(id) {
				return retrieveContact(id);
			},
			deleteContact: function(id) {
				return removeContact(id);
			}
		};
	}

})();
