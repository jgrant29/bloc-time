(function() {
   function LandingCtrl($scope, Tasks, TimePlayer) {
    this.timerButton = "Start work";
    this.breakButton = "Start break"
    this.timePlayer = TimePlayer;

    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.tasks = Tasks

    $scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.tasks.$add({
        from: $scope.user,
        content: $scope.task,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });

      $scope.task = "";
    };

    // if the tasks are empty, add something for fun!
    $scope.tasks.$loaded(function() {
      if ($scope.tasks.length === 0) {
        $scope.tasks.$add({
          from: "DR. Grant",
          content: "Hello!",
          timestamp: Firebase.ServerValue.TIMESTAMP
        });
      }
    });
  }

   angular
       .module('blocTime')
       .controller('LandingCtrl', ['$scope', 'Tasks', 'TimePlayer', LandingCtrl]);
})();