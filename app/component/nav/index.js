'use strict';
require('./nav.scss');

const angular = require('angular');
const $       = require('jquery');

angular.module('app').directive('appNav', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./nav.html'),
    controller: [NavController],
    controllerAs: 'navCtrl',
    bindToController: true,
    scope: {},
  }
});

function NavController(){
  const vm = this;
  vm.logo = require('./asset/logo.jpg');

  vm.showMenu = function() {
    $('.app-nav ul').slideToggle();
  };

  vm.menuUp = function() {
    if ($('.hamburger-button').css('display') == 'block') {
      $('.app-nav ul').slideUp();
    }
  };

  $(window).on('resize', function() {
    if ($('.hamburger-button').css('display') !== 'block') {
      $('.app-nav ul').show();
    }
    else $('.app-nav ul').hide();
  });
};
