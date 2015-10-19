var chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert;

var sampleContact = {

	},
	sampleContacts = [
		{

		},
		{

		},
		{

		}
	];

describe('contactsService factory', function() {

	beforeEach(function() {

		angular.mock.module('rdApp');
		angular.mock.inject(function($injector) {
			contactsService = $injector.get('contactsService');
			$httpBackend = $injector.get('$httpBackend');
		});

	});

	describe('getContacts()', function() {
		it('should make a GET request that returns an object', function() {

			var listOfContacts = contactsService.getContacts();

			expect(listOfContacts).to.be.an('object');

			// expect(listOfContacts).to.equal();

			$httpBackend.expectGET('/api/contacts/')
				.respond(200, sampleContact);

			$httpBackend.flush();

		});

		// What if database is empty

		it('should return a promise');

	});

	describe('getContact()', function() {

		it('should make a GET request that returns an object');

		it('should return a promise');

	});

	describe('deleteContact()', function() {

		it('should make a DELETE request that returns an object');

		it('should return a promise');

	});

	describe('addContact()', function() {

		it('should make a DELETE request that returns an object');

		it('should return a promise');

	});

	describe('updateContact()', function() {

		it('should make a POST request that returns an object');

		it('should return a promise');

	});

});
