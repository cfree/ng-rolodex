var chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	sinon = require('sinon'),
	sampleContacts = [
		{
			"_id":"6356",
			"firstName":"Craig",
			"lastName":"Freeman",
			"street1":"7 Juniper Lane",
			"city":"Naples",
			"zip":"34113",
			"state":"FL",
			"email":"craigfreeman@gmail.com",
			"country":"US",
			"phone":"2397757031"
		},
		{
			"_id":"4561",
			"firstName":"Kellee",
			"lastName":"Williams",
			"street1":"901 Front Street",
			"country":"US",
			"state":"CA",
			"city":"Laguna Beach",
			"zip":"90210",
			"phone":"8603540002",
			"email":"kellee@kelleesawesome.com"
		}
	];


// Using spies on methods
describe('`contactsService` factory', function() {

	beforeEach(function () {
		angular.mock.module('rdApp');
		angular.mock.inject(function($injector) {
			contactsService = $injector.get('contactsService');
			$httpBackend = $injector.get('$httpBackend');
			$q = $injector.get('$q');
			$scope = $injector.get('$rootScope').$new();
		});
	});

	describe('`getContacts` method', function() {
		// Method exists
		it('should exist', function() {
			expect(typeof contactsService.getContacts).to.equal('function');
		});

		// Should be called once (spy, more useful in controllers)
		it('should be called once (spy)', function() {
			sinon.spy(contactsService, 'getContacts');
			contactsService.getContacts();
			expect(contactsService.getContacts.calledOnce).to.equal(true);
		});

		// Method call succeeds - Resolves with list of contacts (stub)
		// it('should return an object of contacts (stub)', function(done) {
		// 	sinon.stub(contactsService, 'getContacts', function() {
		// 		return $q.when(sampleContacts);
		// 	});

		// 	// Call the function, run tests
		// 	contactsService.getContacts()
		// 		.then(function(results) {
		// 			expect(results[0]._id).to.be.greaterThan(0);
		// 			expect(results[0].firstName).to.equal(sampleContacts[0].firstName);

		// 			// Reset the method
		// 			contactsService.getContacts.restore();

		// 			// Signal Mocha to wrap it up
		// 			done();
		// 		});

		// 	// Trigger digest cycle to resolve the promise
		// 	$scope.$digest();
		// });

		// Method call succeeds - Makes a GET request and resolves with list of contacts ($httpBackend)
		it('should make a GET request and return an object of contacts ($httpBackend)', function() {
			$httpBackend.expect('GET', '/api/contacts/')
				.respond(sampleContacts);

			// Call the method, run tests
			contactsService.getContacts()
				.then(function(results) {
					expect(results.data[0]._id).to.be.greaterThan(0);
					expect(results.data[0].firstName).to.equal(sampleContacts[0].firstName);
				});

			// Respond!
			$httpBackend.flush();

			// Trigger digest cycle to resolve the promise
			$scope.$digest();

			// Cleanup
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		// Method call fails (stub)
		it('should return a rejected promise when the call fails (stub)', function(done) {
			sinon.stub(contactsService, 'getContacts', function() {
				return $q.reject('API error');
			});

			// Call the function, run tests
			contactsService.getContacts()
				.catch(function(results) {
					expect(results).to.equal('API error');

					// Reset the method
					contactsService.getContacts.restore();

					// Signal Mocha to wrap it up
					done();
				});

			// Trigger digest cycle to resolve the promise
			$scope.$digest();
		});
	});

	describe('`getContact` method', function() {

		it('should make a GET request that returns an object');

		it('should return a promise');

	});

	describe('`deleteContact` method', function() {

		it('should make a DELETE request that returns an object');

		it('should return a promise');

	});

	describe('`addContact` method', function() {

		it('should make a DELETE request that returns an object');

		it('should return a promise');

	});

	describe('`updateContact` method', function() {

		it('should make a POST request that returns an object');

		it('should return a promise');

	});

});




// Mock the entire service
describe('contactsService factory', function() {

});





// ======== William ===========

// var sampleContact = {

// 	},
// 	sampleContacts = [
// 		{

// 		},
// 		{

// 		},
// 		{

// 		}
// 	];


// describe('contactsService factory', function() {

// 	beforeEach(function() {

// 		angular.mock.module('rdApp');
// 		angular.mock.inject(function($injector) {
// 			contactsService = $injector.get('contactsService');
// 			$httpBackend = $injector.get('$httpBackend');
// 		});

// 	});

// 	describe('getContacts() method', function() {
// 		it.only('should make a GET request that returns an object', function() {

// 			$httpBackend.whenRoute('GET', '/api/contacts/')
// 				.respond(function(method, url, data, headers, params) {
//     				// return [200, sampleContact];

//     				console.log(method, url, data, headers, params);
//   				});

// 			var listOfContacts = contactsService.getContacts();

// 			expect(listOfContacts).to.be.an('object');

// 			$httpBackend.flush();

// 		});

// 		// What if database is empty

// 		it('should return a promise');

// 	});



// 	describe('getContact()', function() {

// 		it('should make a GET request that returns an object');

// 		it('should return a promise');

// 	});

// 	describe('deleteContact()', function() {

// 		it('should make a DELETE request that returns an object');

// 		it('should return a promise');

// 	});

// 	describe('addContact()', function() {

// 		it('should make a DELETE request that returns an object');

// 		it('should return a promise');

// 	});

// 	describe('updateContact()', function() {

// 		it('should make a POST request that returns an object');

// 		it('should return a promise');

// 	});

// });
