var app = angular.module("app-module", ["ngRoute", "ngResource"]);

app.controller("app-controller", function ($scope, $http) {
  $scope.show = function () {
    if ($scope.check == true) $scope.result = true;
    else $scope.result = false;
  };
});
