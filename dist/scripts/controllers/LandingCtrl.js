(function() {
   function LandingCtrl(TimePlayer) {
    this.timerButton = "Start";
    this.timePlayer = TimePlayer;
   }

   angular
       .module('blocTime')
       .controller('LandingCtrl', ['TimePlayer', LandingCtrl]);
})();