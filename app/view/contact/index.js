'use strict';
require('./contact.scss');

const angular = require('angular');

angular.module('app').controller('ContactController', function(){
  this.test = 'hello world from CONTACT';
});
