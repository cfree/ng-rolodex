(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('AddController', addContact);

	function addContact() {
		/* jshint validthis: true */
		var vm = this;
		vm.titlePrefix = 'Add';
	}

})();
