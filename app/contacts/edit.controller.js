'use strict';

var angular = require('angular');

angular.module('rdApp')
	.controller('EditController', viewContact);

function viewContact($window, $location, $routeParams, contactsService) {
	/* jshint validthis: true */
	var vm = this;
	vm.titlePrefix = 'Edit';
	vm.buttonLabel = 'Update Contact';
	vm.showDelete = true;
	vm.id = $routeParams.id;
	vm.deleteContact = deleteContact;
	vm.submitForm = submitForm;
	vm.recordUpdated = false;

	function deleteContact() {
		var confirm = window.confirm('You are about to delete this contact. Press OK to confirm.');

		if (confirm) {
			return contactsService.deleteContact(vm.id)
				.then(function(data) {
					alert('The contact has been deleted.');
					$location.path('/');
					$window.location.reload();
				});
		}
	}

	function submitForm(contact) {
		return contactsService.updateContact(vm.id, contact)
			.then(function(res) {
				vm.contact = res.data;
				vm.recordUpdated = true;

				$location.path('/edit/' + res.data._id);
				$window.location.reload();
			});
	}
}
