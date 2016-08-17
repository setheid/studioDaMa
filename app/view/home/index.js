'use strict';
require('./home.scss');

const angular = require('angular');

angular.module('app').controller('HomeController', function(){
  let vm = this;

  vm.homeImg = require('./../../asset/pavilion/img1_large.jpg');
});
