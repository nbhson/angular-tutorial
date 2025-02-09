

var app = angular.module('app-module', []);

app.factory('logService', function () {
  var messageCount = 0;
  return {
    log: function (msg) {
      return msg + ' ' + ++messageCount
    }
  };
});

app.service('calcservice', function () {
  this.square = function (a) {
    return a * a
  };
});

app.provider('providerService', function () {
  return {
    $get: function () {
      return {
        counter: 0,
        provider: function (msg) {
          return msg + ' ' + ++messageCount
        }
      };
    }
  }
});

app.controller('app-controller', function ($scope, logService, calcservice, providerService) {
  $scope.factoryServiceMsg = logService.log('Counter Message: ')
  $scope.calcServiceServiceMsg = calcservice.square(5)
  $scope.providerServiceMsg = providerService.counter
});