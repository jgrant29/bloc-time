(function() {
  function Tasks($firebaseArray) {
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://brilliant-inferno-8292.firebaseio.com/tasks" + randomRoomId);

    return $firebaseArray(ref)
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();