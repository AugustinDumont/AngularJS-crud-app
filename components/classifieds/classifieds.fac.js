(function () {

  "use strict";

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory', function ($http, $firebaseArray) {

      var ref = new Firebase('https://ngclassfieds-573bf.firebaseio.com/');

      return {
        ref: $firebaseArray(ref)
      }

    });

})();