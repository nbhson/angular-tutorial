var app = angular.module("app-module", []);

app.controller("app-controller", function ($scope) {
  $scope.organization = "GeeksforGeeks";
});

app.run(function($rootScope) {
  $rootScope.relation = 'friend';
});
app.controller('control', function($scope) {
  $scope.relation = "brothers";
});
