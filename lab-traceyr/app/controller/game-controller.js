'use strict';

const angular = require('angular');
const lab20 = angular.module('lab-20');

lab20.controller('GameController', ['$scope', function($scope){
  $scope.gameCtrl = {};
  $scope.gameCtrl.playerClasses = ['Elf', 'Hobbit', 'Wizard', 'Human', 'Dwarf', 'Ent'];
  $scope.gameCtrl.monsterTypes = ['Orc', 'Balrog', 'Dragon', 'Goblin', 'Ringwraith', 'Troll'];
  $scope.gameCtrl.playerDone = false;
  $scope.gameCtrl.monsterDone = false;

  $scope.gameCtrl.createPlayer = function(player){
    console.log(player);
    $scope.gameCtrl.player = player;
    console.log($scope.gameCtrl.player);
    $scope.gameCtrl.playerDone = true;
  };

  $scope.gameCtrl.createMonster = function(monster){
    $scope.gameCtrl.monster = monster;
    $scope.gameCtrl.monsterDone = true;
  };
}]);
