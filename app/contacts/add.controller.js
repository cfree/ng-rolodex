(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('AddController', addContact);

	function addContact($window, $location, contactsService) {
		/* jshint validthis: true */
		var vm = this;
		vm.titlePrefix = 'Add';
		vm.buttonLabel = 'Add Contact';
		vm.submitForm = submitForm;

		function submitForm(contact) {
			return contactsService.addContact(contact)
				.then(function(res) {
					$location.path('/edit/' + res.data._id);
					$window.location.reload();
				});
		}
	}

})();
