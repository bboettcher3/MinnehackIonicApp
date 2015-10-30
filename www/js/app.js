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


.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'mainCTRL'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('hist', {
            url: '/hist',
            templateUrl: 'views/hist.html',
            controller: 'histCTRL'
        })
            .state('chem', {
            url: '/chem',
            templateUrl: 'views/chem.html',
            controller: 'chemCTRL'
        })
            .state('math', {
            url: '/math',
            templateUrl: 'views/math.html',
            controller: 'mathCTRL'
        })
            .state('ece', {
            url: '/ece',
            templateUrl: 'views/ece.html',
            controller: 'eceCTRL'
        })
})

.factory('myFactory', function($rootScope) {
    $rootScope.data = {}; 
    $rootScope.data.hist = [false, false];
    $rootScope.data.chem = [false, false, false, false, false]; 
    $rootScope.data.math = [false, false];
    $rootScope.data.ece = [false, false];
    console.log ("Data initialized");
    return {};
})

.controller('eceCTRL', ['$scope', 'myFactory', function($scope) {
    
}])
.controller('mathCTRL', ['$scope', 'myFactory', function($scope) {
    
}])
.controller('chemCTRL', ['$scope', 'myFactory', function($scope) {
    
}])
.controller('histCTRL', ['$scope', 'myFactory', function($scope) {
    
}])
    
.controller('mainCTRL', ['$scope', 'myFactory', function($scope, $rootScope) {
    
}]);