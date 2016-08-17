'use strict';
require('./work.scss');

const angular = require('angular');

angular.module('app').controller('WorkController', ['$scope', function($scope){
  const vm = this;

  vm.showOverview = true;
  vm.projects = [
    {id: 'pavilion', name: 'Hot Spot Pavilion', img: require('./../../asset/pavilion/img2.jpg'), imgNum:5},
    {id: 'mackey_thesis', name: 'Alden Mackey Thesis', img: require('./../../asset/mackey_thesis/img0.jpg'), imgNum:5},
  ];

  vm.projects.forEach( project => project.imgs = getProjectImgArray(project));

  function getProjectImgArray(project) {
    let count = 0;
    let projectImgs = [];
    while (count < project.imgNum) {
      projectImgs.push(require(`./../../asset/${project.id}/img${count}.jpg`));
      count++;
    }
    return projectImgs;
  };

}]);
