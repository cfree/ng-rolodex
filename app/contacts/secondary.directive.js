'use strict';

var angular = require('angular');

angular.module('rdApp')
	.directive('rdSecondary', secondary);

function secondary() {
	return {
		restrict: 'A',
		templateUrl: './app/contacts/secondary.html',
		controller: 'SecondaryController',
		controllerAs: 'vm'
	};
}
