angular.module('demoApp').controller('bodyController', bodyController);

function bodyController($scope, equations){
  $scope.equations = equations;
}