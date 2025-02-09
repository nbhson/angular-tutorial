var app = angular.module("app-module", []);

app.controller("app-controller", function ($scope) {
  $scope.firstName = "Geeks";
  $scope.lastName = "Geeks";

  $scope.fullName = function () {
    return $scope.firstName + " " + $scope.lastName;
  };
});
