'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        abstract: true,
        url: '/home',
        templateUrl: 'views/layout.html'
      })
      .state('home.name', {
        url: '/name',
        templateUrl: 'views/name.html'
      })
  })
  .factory('account', function(){
    return {
      myAccount: {
        firstName: 'Tan',
        lastName: 'Le',
      }
    }
  })
  .factory('calculate', function(){
    return function(firstNumber, secondNumber, operator){
      var result = 0;
      if (operator === '+'){
        result = (parseFloat(firstNumber, 10) + parseFloat(secondNumber,10)).toString();
      } else if (operator === '-'){
        result = (parseFloat(firstNumber, 10) - parseFloat(secondNumber,10)).toString();
      } else if (operator === '/'){
        result = (parseFloat(firstNumber, 10) / parseFloat(secondNumber,10)).toString();
      } else if (operator === '*'){
        result = (parseFloat(firstNumber, 10) * parseFloat(secondNumber,10)).toString();
      }
      return result;
    }
  })
  .factory('equations', function(){
    return [];
  });