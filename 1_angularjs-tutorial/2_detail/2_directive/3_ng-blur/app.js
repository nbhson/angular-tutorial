var app = angular.module("app-module", ['ngRoute', 'ngResource']);

app.controller("app-controller", function ($scope, $http) {
  $scope.msg = false;
})
