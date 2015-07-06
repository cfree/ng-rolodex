(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('ListController', listContacts);

	function listContacts($rootScope) {
		// Do stuff
		$rootScope.selectedContactId = '5522134c2aa3c0b86c6f497e';
	}

})();
