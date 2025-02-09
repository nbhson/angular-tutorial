app.controller("app-controller", function ($scope) {
  $scope.message = "Welcome to App Controller!";
  $scope.choice = 'Your choice is: GeeksforGeeks';
  $scope.list = ['I', 'L', 'O', 'V', 'E', 'U'];
    
  $scope.ch = function(choice) {
      $scope.choice = "Your choice is: " + choice;
  };

  $scope.c = function() {
    $scope.choice = "Your choice is: " + $scope.mychoice;
};
});
