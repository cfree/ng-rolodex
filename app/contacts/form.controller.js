(function() {
	'use strict';
	
	angular.module('rdApp')
		.controller('FormController', formCtrlr);

	function formCtrlr() {
		/* jshint validthis: true */
		var fm = this;
		fm.submitForm = submitForm;
		fm.isCanada = isCanada;

		function submitForm(formData) {
			console.log(fm);
		}

		function isCanada(country) {
			return ('CA' === country) ? true : false;
		}
	}

})();
