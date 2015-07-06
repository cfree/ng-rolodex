(function() {
	'use strict';

	angular.module('rdApp', '')
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/app/contacts/default.html'
				})
				.when('/edit/:id', {
					templateUrl: '/app/contacts/edit.html',
					controller: 'EditController as vm'
				})
				.when('/add', {
					templateUrl: '/app/contacts/edit.html',
					controller: 'AddController as vm'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
		});

})();
