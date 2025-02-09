var app = angular.module("app-module", ["ngRoute", "ngResource"]);

app.controller("app-controller", function ($scope, $http) {
  $scope.sort = [
    { name: "Merge sort" },
    { name: "Quick sort" },
    { name: "Insertion sort" },
    { name: "Bubble sort" },
  ];
});
