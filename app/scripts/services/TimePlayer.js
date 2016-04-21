(function() {
  function TimePlayer($interval) {
    var TimePlayer = {};

    TimePlayer.format = 'mm:ss';
    TimePlayer.relax = false;
    var WORKTIME = 5;
    var BREAKTIME = 4;
    TimePlayer.pomodoro = 3;

    var stop;
    TimePlayer.work = function() {
      stop = $interval(function() {
        if (TimePlayer.pomodoro > 0 ) {
          TimePlayer.pomodoro = TimePlayer.pomodoro - 1;
          TimePlayer.buttonClicked = true;
        } else {
          if(TimePlayer.relax){
            // prepare timer for work
            $interval.cancel(stop);
            TimePlayer.pomodoro = WORKTIME;
            TimePlayer.relax = false;
            TimePlayer.buttonClicked = false;
          }else{
            // prepare timer for break
            $interval.cancel(stop);
            TimePlayer.pomodoro = BREAKTIME;
            TimePlayer.relax = true;
            TimePlayer.buttonClicked = false;
          }
        }
      }, 1000);
    };

    TimePlayer.stopWork = function() {
      // if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        // stop = undefined;
        TimePlayer.pomodoro = 0;
      // }
    };

    TimePlayer.resetWork = function() {
      $interval.cancel(stop);
      TimePlayer.pomodoro = 1500;
      TimePlayer.buttonClicked = false;

    };

    return TimePlayer;
  }

  angular
      .module('blocTime')
      .factory('TimePlayer', ['$interval', TimePlayer]);
})();

