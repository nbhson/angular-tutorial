var app = angular.module("app-module", []);

app.controller("app-controller", function ($scope) {
  $scope.name = "Hello Geeks!";
  $scope.check = "";
  $scope.rad = "";
  $scope.num = "";
  $scope.mail = "";
  $scope.url = "";
  $scope.date1 = "";
  $scope.date2 = "";
  $scope.time1 = "";
  $scope.mon = "";
  $scope.we = "";
  $scope.choice = "";
  $scope.c = function () {
    $scope.choice = true;
  };
});
