'use strict';

var angular = require('angular');

angular.module('rdApp')
	.controller('SecondaryController', SecondaryController);

function SecondaryController($location, $routeParams, $scope, contactsService) {
	/* jshint validthis: true */
	var vm = this;
	vm.isCurrentPage = isCurrentPage;
	vm.activeItem = null;

	getContacts();

	$scope.$watch(function() {
			return $location.path();
		}, function(path) {
			if (path === '/') {
				vm.activeItem = null;
			}
		}
	);

	function getContacts() {
		return contactsService.getContacts()
			.then(function(data) {
				vm.contacts = data.data;
				return vm.contacts;
			});
	}

	function isCurrentPage(id) {
		var location = $location.path();

		// Is 'add' page?
		if (id === 'tbd' && location.substr(1) === 'add') {
			return true;
		}
		// Does slug match this id?
		else if (typeof $routeParams.id !== null && $routeParams.id === id) {
			return true;
		}

		return false;
	}
}
