(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('FormController', formCtrlr);

	function formCtrlr(contactsService, $routeParams) {
		/* jshint validthis: true */
		var fm = this,
			id = $routeParams.id;
		fm.user = {};
		fm.isCanada = isCanada;

		if ('undefined' !== typeof id) {
			getContact(id);
		}

		function isCanada(country) {
			return ('CA' === country) ? true : false;
		}

		function getContact(id) {
			return contactsService.getContact(id)
				.then(function(res) {
					var contact = res.data;
					contact.fullName = contact.firstName + ' ' + contact.lastName;

					fm.user = contact;
				});
		}
	}

})();
