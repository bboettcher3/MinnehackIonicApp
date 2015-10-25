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
  $ionicPlatform.registerBackButtonAction(function(event) {
    if (true) { // your check here
      $ionicPopup.confirm({
        title: 'System warning',
        template: 'are you sure you want to exit?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      })
    }
  }, 100);
})

.controller('mainCTRL', ['$scope', function($scope, $location) {
    $scope.classes = ["History", "Chemistry", "Calculus", "ECE"];
}])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('hist', {
            url: '/hist',
            templateUrl: 'views/hist.html'
        })
            .state('chem', {
            url: '/chem',
            templateUrl: 'views/chem.html'
        })
            .state('math', {
            url: '/math',
            templateUrl: 'views/math.html'
        })
            .state('ece', {
            url: '/ece',
            templateUrl: 'views/ece.html'
        })
});