'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const $       = require('jquery');

// angular services
require('angular-route');
require('angular-animate');

// angular modules
const app = angular.module('app', ['ngRoute', 'ngAnimate']);

// app services

// app components
require('./component/nav');

// app views
require('./view/home');
require('./view/work');
require('./view/about');
require('./view/contact');

app.config(['$routeProvider', function(routeProvider) {
  routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
  })
  .when('/work', {
    template: require('./view/work/work.html'),
    controller: 'WorkController',
    controllerAs: 'workCtrl',
  })
  .when('/work/pavilion', {
    template: require('./view/work/work-pavilion.html'),
    controller: 'WorkController',
    controllerAs: 'workCtrl',
  })
  .when('/work/mackey_thesis', {
    template: require('./view/work/work-mackey.html'),
    controller: 'WorkController',
    controllerAs: 'workCtrl',
  })
  .when('/about', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
  })
  .when('/contact', {
    template: require('./view/contact/contact.html'),
    controller: 'ContactController',
    controllerAs: 'contactCtrl',
  });
}]);
