'use strict';

var angular = require('angular');
require('angular-route');

// Bootstrap
angular.module('rdApp', ['ngRoute']);

// Routing
require('./rolodex.route');

// Factories
require('./factories/contacts.factory');

// Contacts
require('./contacts/add.controller');
require('./contacts/edit.controller');
require('./contacts/form.controller');
require('./contacts/list.controller');
require('./contacts/secondary.controller');
require('./contacts/secondary.directive');
