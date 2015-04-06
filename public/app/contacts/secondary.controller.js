(function() {
	'use strict';

	angular.module('rdApp')
		.controller('SecondaryController', SecondaryController);

	function SecondaryController($location, $rootScope, contactsService) {
		/* jshint validthis: true */
		var vm = this;
		vm.isSelected = isSelected;
		vm.isAddPage = isAddPage;

		getContacts();

		function getContacts() {
			return contactsService.getContacts()
				.then(function(data) {
					vm.contacts = data.data;
					return vm.contacts;
				});
		}

		function isSelected(id) {
			if ($rootScope.selectedContactId === id && !isAddPage()) {
				return true;
			}

			return false;
		}

		function isAddPage() {
			if ($location.path() === '/add') {
				return true;
			}

			return false;
		}
	}

})();
