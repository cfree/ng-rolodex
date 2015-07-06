(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('EditController', viewContact);

	function viewContact($location, $routeParams, contactsService) {
		/* jshint validthis: true */
		var vm = this;
		vm.titlePrefix = 'Edit';
		vm.showDelete = true;
		vm.id = $routeParams.id;
		vm.deleteContact = deleteContact;

		getContact(vm.id);

		function deleteContact() {
			console.log('clicked');
			var confirm = window.confirm('You are about to delete the contact for ' + vm.contact.fullName + '. Press OK to confirm.');

			if (confirm) {
				return contactsService.deleteContact(vm.id)
					.then(function(data) {
						alert('The contact for ' + vm.contact.fullName + ' has been deleted.');
						$location.path('/');
					});
			}
		}

		function getContact(id) {
			return contactsService.getContact(id)
				.then(function(data) {
					vm.contact = data.data;
					vm.contact.fullName = vm.contact.firstName + ' ' + vm.contact.lastName;
					return vm.contact;
				});
		}
	}

})();
