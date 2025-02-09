var app = angular.module("app-module", ['ngRoute', 'ngResource']);

app.controller("app-controller", function ($scope, $http) {

  /** 1 */
  $scope.name = "geeksforgeeks";
  /** 2 */
  $scope.num1 = 1;
  $scope.num2 = 1;
  $scope.product = function () {
    $scope.result = `<b>${$scope.num1 * $scope.num2}</b>`
  }
  /** 3 */
  $scope.names = ['Adam', 'Steve', 'George', 'James', 'Armin']
  /** 4 */
  $scope.alert = function () {
    alert("This is an example of ng-click");
  }
})
