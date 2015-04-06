(function() {
	'use strict';

	angular.module('rdApp', '')
		.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/app/contacts/view.html',
					controller: 'ListController as vm'
				})
				.when('/view/:id', {
					templateUrl: '/app/contacts/view.html',
					controller: 'ViewController as vm'
				})
				.when('/edit/:id', {
					templateUrl: '/app/contacts/edit.html',
					controller: 'EditController as vm'
				})
				.when('/add', {
					templateUrl: '/app/contacts/add.html',
					controller: 'AddController as vm'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
		});

})();
