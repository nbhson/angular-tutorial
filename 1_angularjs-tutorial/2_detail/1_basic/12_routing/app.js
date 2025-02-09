var app = angular.module("app-module", ['ngRoute','ngResource']);

app.config(["$routeProvider", "$locationProvider", route]);

app.controller("app-controller", function ($scope, $http) {
   
})

function route($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);

  $routeProvider
    .when("/home", {
      templateUrl: "/home.html",
      controller: "app-controller",
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "app-controller",
    })
    .otherwise({
      redirectTo: "/home",
    });
}
