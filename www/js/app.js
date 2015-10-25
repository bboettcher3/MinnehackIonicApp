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

//.controller('mainCTRL', ['$scope', function($scope) {
//    $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//    $scope.horoscopes = ["You suck in general.", "You suck in a very specific way.", "You have and always will have sucked.", "Your mother even thinks you suck.", "You rock.", "You suck soooo much.", "Everyone who has ever loved you was wrong.", "You know you suck, right?", "Your father is not proud of you.", "Your grandparents ignore your phone calls on purpose.", "Your name is Paige and you will end up living in a van down by a river.", "I can't imagine how much sucking it takes to get to your level of sucking."];
//    $scope.getHoroscope = function(index) {
//        $scope.displayHoroscope = $scope.horoscopes[index];
//    }
//    
//    
//}]);
.controller('mainCTRL', function($scope, $ionicLoading, $compile) { 
      
     $scope.mapOptions = {}; 
      
       $scope.init = function() { 
           //default location 
         var myLatlng = new google.maps.LatLng(43.07493,-89.381388); 
 
 
         var mapOptions = { 
             //default settings 
           center: myLatlng, 
           zoom: 16, 
           mapTypeId: google.maps.MapTypeId.ROADMAP 
         }; 
           //getting default location 
         var map = new google.maps.Map(document.getElementById("map"), 
             mapOptions); 
 
 
         //Marker + infowindow + angularjs compiled ng-click 
         var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>"; 
         var compiled = $compile(contentString)($scope); 
 
 
         var infowindow = new google.maps.InfoWindow({ 
           content: compiled[0] 
         }); 
 
 
         var marker = new google.maps.Marker({ 
           position: myLatlng, 
           map: map, 
           title: 'Starting Point' 
         }); 
 
 
         google.maps.event.addListener(marker, 'click', function() { 
           infowindow.open(map,marker); 
         }); 
 
 
         $scope.map = map; 
     }; 
 
 
     // google.maps.event.addDomListener(window, 'load', initialize); 
 
 
     $scope.centerOnMe = function() { 
         if(!$scope.map) { 
             return; 
         } 
 
 
         $scope.loading = $ionicLoading.show({ 
           content: 'Getting current location...', 
           showBackdrop: false 
         }); 
 $scope.posOptions = {timeout: 10000, enableHighAccuracy: true}; 
         
        //grab current location 
        navigator.geolocation.getCurrentPosition(function(pos) { 
            console.log(pos.coords.latitude); 
            console.log(pos.coords.longitude); 
            console.log($scope.mapOptions); 
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)); 
         $scope.map.setZoom(13); 
            $scope.newLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude); 
             
            $scope.marker = new google.maps.Marker({ 
          position: $scope.newLatlng, 
          map: $scope.map, 
          title: 'new point' 
        }) 
             
               $scope.contentString = "<div><a ng-click='clickTest()'>Current Location</a></div>"; 
        $scope.compiled = $compile($scope.contentString)($scope); 

        $scope.infowindow = new google.maps.InfoWindow({ 
          content: $scope.compiled[0] 
        }); 
             
            google.maps.event.addListener($scope.marker, 'click', function() { 
          $scope.infowindow.open($scope.map,$scope.marker); 
        }); 
             
          $ionicLoading.hide(); 
        }, function(error) { 
          alert(error.message); 
        }, $scope.posOptions); 
    }; 

    $scope.clickTest = function() { 
        alert('Example of infowindow with ng-click') 
    }; 
}) 

