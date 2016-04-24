(function() {
  function TimePlayer($rootScope, $interval) {
    var TimePlayer = {};

    TimePlayer.format = 'mm:ss';
    TimePlayer.relax = false;
    var WORKTIME = 1; //1500 = 25 minutes
    var BREAKTIME = 2; //300 = 5 minutes
    var BIGBREAK = 3; //1800 = 30 minutes
    TimePlayer.pomodoro = 1; //1500
    var howManyTimes = 0

    var stop;

    TimePlayer.work = function() {
      stop = $interval(function() {
        if (TimePlayer.pomodoro > 0 ) {
          TimePlayer.pomodoro = TimePlayer.pomodoro - 1;
          TimePlayer.buttonClicked = true;
          TimePlayer.watchYou();
        } else {
          if(TimePlayer.relax){
            // prepare timer for work
            $interval.cancel(stop);
            TimePlayer.pomodoro = WORKTIME;
            TimePlayer.relax = false;
            TimePlayer.buttonClicked = false;
          }else{
            if (howManyTimes > 0 && howManyTimes % 4 == 0) {
              $interval.cancel(stop);
              TimePlayer.pomodoro = BIGBREAK;
              TimePlayer.relax = true;
              TimePlayer.buttonClicked = false;
            }else{
            // prepare timer for break
              $interval.cancel(stop);
              TimePlayer.pomodoro = BREAKTIME;
              TimePlayer.relax = true;
              TimePlayer.buttonClicked = false;
            }
            howManyTimes++
          }
        }
      }, 1000);
    };

    TimePlayer.stopWork = function() {
      // if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        // stop = undefined;
        TimePlayer.pomodoro = 0;
        howManyTimes = 0
      // }
    };

    TimePlayer.resetWork = function() {
      $interval.cancel(stop);
      TimePlayer.pomodoro = 1500;
      TimePlayer.buttonClicked = false;
      howManyTimes = 0
    };

    var mySound = new buzz.sound( "/assets/sounds/ding.mp3", {
      preload: true
    });


    TimePlayer.watchYou = function() {
      if (TimePlayer.pomodoro == 0) {
          mySound.play();
        }
    }

    return TimePlayer;
  }

  angular
      .module('blocTime')
      .factory('TimePlayer', ['$rootScope', '$interval', TimePlayer]);
})();

