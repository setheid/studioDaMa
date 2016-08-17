'use strict';
require('./about.scss');

const angular = require('angular');

angular.module('app').controller('AboutController', function(){
  this.test = 'hello world from ABOUT';
});
