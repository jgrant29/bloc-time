(function() {
   function LandingCtrl(TimePlayer) {
    this.timerButton = "Cut Tomato";
    this.breakButton = "Eat Tomato"
    this.timePlayer = TimePlayer;
   }

   angular
       .module('blocTime')
       .controller('LandingCtrl', ['TimePlayer', LandingCtrl]);
})();