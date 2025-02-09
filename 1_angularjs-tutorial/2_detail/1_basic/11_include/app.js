var app = angular.module("app-module", []);

app.controller("app-controller", function ($scope, $http) {
    $http({
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/users',
      }).then(
        function (response) {
          $scope.users = response.data;
        },
        function (error) {}
      );
})
