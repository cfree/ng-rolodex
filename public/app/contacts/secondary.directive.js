(function() {
	'use strict';
	
	angular.module('rdApp')
		.directive('rdSecondary', secondary);

	function secondary() {
		return {
			restrict: 'A',
			templateUrl: 'app/contacts/secondary.html',
			controller: 'SecondaryController',
			controllerAs: 'vm'
		};
	}

})();
