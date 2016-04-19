(function() {
  function TimePlayer($interval) {
    var TimePlayer = {};

    TimePlayer.format = 'mm:ss';
    TimePlayer.pomodoro = 1500;

    var stop;
    TimePlayer.work = function() {
      if ( angular.isDefined(stop) ) return;

      stop = $interval(function() {
        if (TimePlayer.pomodoro > 0 ) {
          TimePlayer.pomodoro = TimePlayer.pomodoro - 1;
        } else {
          TimePlayer.stopWork();
        }
      }, 1000);
    };

    TimePlayer.stopWork = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
        TimePlayer.pomodoro = 0;
      }
    };

    TimePlayer.resetWork = function() {
      TimePlayer.pomodoro = 1500;
    };

    TimePlayer.breakWork = function() {
      TimePlayer.pomodoro = 300;
    };

    return TimePlayer;
  }

  angular
      .module('blocTime')
      .factory('TimePlayer', ['$interval', TimePlayer]);
})();