// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('mainCTRL', ['$scope', function($scope) {
    $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $scope.horoscopes = ["You suck in general.", "You suck in a very specific way.", "You have and always will have sucked.", "Your mother even thinks you suck.", "You rock.", "You suck soooo much.", "Everyone who has ever loved you was wrong.", "You know you suck, right?", "Your father is not proud of you.", "Your grandparents ignore your phone calls on purpose.", "Your name is Paige and you will end up living in a van down by a river.", "I can't imagine how much sucking it takes to get to your level of sucking."];
    $scope.getHoroscope = function(index) {
        $scope.displayHoroscope = $scope.horoscopes[index];
    }
    
    
}]);
