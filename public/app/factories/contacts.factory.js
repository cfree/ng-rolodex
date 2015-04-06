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
		}

		return {
			getContacts: function() {
				return retrieveContacts();
			}
		};
	}

})();
