"use strict";

App.controller('SpeechCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.say = function() {
    $http.post('/say', {
      phrase: $scope.phrase
    });
  };
}]);
