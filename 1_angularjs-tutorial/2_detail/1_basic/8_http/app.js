var app = angular.module("app-module", []);

app.controller("app-controller", function ($scope, $http) {
  const url = "./data.json";

  $http({
    method: "GET",
    url,
  }).then(
    function (response) {
      $scope.students = response.data;
    },
    function (error) {}
  );
})
