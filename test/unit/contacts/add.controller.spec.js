var chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	sinon = require('sinon'),
	mocks = require('../mocks/contactsService.mock');

var AddController,
	contactsService,
	$location,
	contactsServiceMock;

describe('`AddController` controller', function() {

	beforeEach(function() {
		angular.mock.module('rdApp');
		angular.mock.inject(function($injector) {
			$controller = $injector.get('$controller');
			contactsService = $injector.get('contactsService');
			$location = $injector.get('$location');
			$rootScope = $injector.get('$rootScope');
			contactsServiceMock = sinon.mock(mocks.contactsServiceMock);

			AddController = $controller('AddController', {
				$location: $location,
				contactsService: contactsService
			});

			$rootScope.$apply();
		});
	});

	// Controller gets created
	it('should be created successfully', function() {
		expect(AddController).to.be.an('object');
	});

	it('sets `titlePrefix`', function() {
		expect(AddController.titlePrefix).to.equal('Add');
	});

	it('sets `buttonLabel`', function() {
		expect(AddController.buttonLabel).to.equal('Add Contact');
	});

	describe('`submitForm` method', function() {
		// Method exists
		it('should exist', function() {
			expect(typeof AddController.submitForm).to.equal('function');
		});

		it('submits a new contact');

		it('redirect to new contact edit page', function() {
			// Inject $location
			console.log(JSON.stringify(mocks));
		});

		// Should be called once (spy, more useful in controllers)
		// it('should be called once (spy)', function() {
		// 	sinon.spy(contactsService, 'getContacts');
		// 	contactsService.getContacts();
		// 	expect(contactsService.getContacts.calledOnce).to.equal(true);
		// });
	});

});










// ========== old

// AddController
// describe('AddController controller', function() {
	// Pre-load the app
	// beforeEach(angular.mock.module('rdApp'));

	// var controller = require('app/add.controller');

	// var service, 
	// 	$httpBackend,
	// 	contactsService;

	// Pre-load the controller's module
	// beforeEach(function() {
	// 	angular.mock.module('rdApp');



		// angular.mock.inject(function(_$httpBackend_, _$window_, _$location_, $injector, $rootScope, contactsService) {
		// 	$scope = $rootScope.$new();
		// 	$rootScope.apply();

			// $window = _$window_;
			// $location = _$location_;
			// $httpBackend = _$httpBackend_;
			// contactsService = $injector.get('contactsService');

			// creates a controller with a given scope
			// $controller = $injector.get('$controller');
			// return contactsService;
		// });
	// });

	// afterEach(function(){
	// 	$httpBackend.verifyNoOutstandingExpectation();
	// 	$httpBackend.verifyNoOutstandingRequest();
	// });

	// it('Should store an array containing a new contact', function() {
	// 	$controller('AddController', {
	// 		$location: $location,
	// 		$window: $window,
	// 		contactsService: contactsService
	// 	});

		// $scope.submitForm = function(arr) {
		// 	return arr;
		// }

		// console.log('controller: ' + $scope.titlePrefix);

	// 	var sampleContact = {
	// 		"_id": "001",
	// 		"firstName": "Craig",
	// 		"lastName": "Freeman",
	// 		"street1": "7 Juniper Lane",
	// 		"country": "US",
	// 		"state": "CT",
	// 		"city": "Brookfield",
	// 		"zip": "06804",
	// 		"phone": "12037757031",
	// 		"email": "cfreeoo7@aol.com"
	// 	};

	// 	$httpBackend.expectGET('/app/contacts/default.html').respond(200); 
	// 	// $httpBackend.expectPOST('/api/contacts/', sampleContact).respond(200); 

	// 	$httpBackend.flush();

	// 	var formSubmitted = $scope.submitForm();

	// 	expect(formSubmitted).isArray();
	// });	
// });





// describe('the contact controller', function() {
// 	beforeEach(function() {
// 		module('AddressBook');

// 		inject(function($injector, $rootScope) {
// 			// create special version of the scope to pass
// 			// to controller
// 			$scope = $rootScope.$new();

// 			contactsService = $injector.get('contactService');
// 			$httpBackend = $injector.get('$httpBackend');

// 			// creates a controller with a given scope
// 			$controller = $injector.get('$controller');

// 		});
// 	});

// 	it('should store an array of contacts in scope', function() {
// 		$controller('ContactController', {
// 			$scope: $scope,
// 			contactService: contactService
// 		});

// 		assert.isArray($scope.contacts);
// 	});
// });
