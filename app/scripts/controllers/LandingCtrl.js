(function() {
   function LandingCtrl(TimePlayer) {
    this.timerButton = "Start work";
    this.breakButton = "Start break"
    this.timePlayer = TimePlayer;
   }

   angular
       .module('blocTime')
       .controller('LandingCtrl', ['TimePlayer', LandingCtrl]);
})();