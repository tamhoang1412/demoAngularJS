angular.module('demoApp').controller('headerController', headerController);

function headerController($scope, equations, calculate){
  $scope.calculate = function(){
    equations.push({
      firstNumber: $scope.equation.firstNumber,
      secondNumber: $scope.equation.secondNumber,
      operator: $scope.equation.operator,
      result: calculate($scope.equation.firstNumber, $scope.equation.secondNumber, $scope.equation.operator),
    });
  };
}