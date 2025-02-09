var mainModule = angular.module("mainModule", [
  "ngRoute",
  "ngResource",
  "ngAnimate",
]);

/** ROUTE */
mainModule.config(["$routeProvider", "$locationProvider", route]);

/** CONTROLLER */
mainModule.controller("mainController", ["$scope", "$http", mainController]);
mainModule.controller("contactController", [
  "$scope",
  "$location",
  contactController,
]);

/** DIRECTIVE */
mainModule.directive("randomNinja", [randomNinja]);

/** -------------------------FUNCTION-------------------------- */
function route($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);

  $routeProvider
    .when("/home", {
      templateUrl: "views/home/home.html",
      controller: "mainController",
    })
    .when("/directory", {
      templateUrl: "views/directory/directory.html",
      controller: "mainController",
    })
    .when("/contact", {
      templateUrl: "views/contact/contact.html",
      controller: "contactController",
    })
    .when("/contact-success", {
      templateUrl: "views/contact/contact-success.html",
      controller: "contactController",
    })
    .otherwise({
      redirectTo: "/home",
    });
}

function mainController($scope, $http) {

  $scope.title="'Ninja excellence'"
  $scope.description="'Custom directive'"

  $scope.message = "Hey! this is a message!";
  $scope.inputNumber = 10

  $scope.addNinja = function () {
    $scope.ninja.push({
      name: $scope.newNinja.name,
      age: $scope.newNinja.age,
      rate: $scope.newNinja.rate,
    });
  };

  $scope.removeAll = function () {
    $scope.ninja = [];
  };

  $http({
    method: "GET",
    url: "data/main.json",
  }).then(
    function (response) {
      $scope.ninja = response.data;
    },
    function (error) {}
  );
}

function contactController($scope, $location) {
  $scope.addContact = function () {
    $location.path("contact-success");
  };
}

function randomNinja() {
  const data = {
    restrict: "E",
    scope: {
      ninja: "=",
      title: "=",
      description: "=",
    },
    transclude: true,
    // replace: true,
    templateUrl: "views/directive/random.html",
    controller: function ($scope) {
      $scope.random = Math.floor(Math.random() * 3);

      $scope.next = function() {
        $scope.random = Math.floor(Math.random() * 3);
      }

    },
  };
  return data;
}
