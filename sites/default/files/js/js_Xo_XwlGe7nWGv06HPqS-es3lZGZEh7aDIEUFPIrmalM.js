var myApp = angular.module("myModule", []);

myApp.controller("myController", ['$http','$scope','$location', function ($http, $scope, $location) {
  $scope.message = "Here is a list of first articles";
  $scope.host = $location.host();

  //GET sample
    //substitute 'param1' and 'param2' for the proper name the API is expecting these parameters
    
    $http.get('http://localhost/drupal/jsonapi/node/article?page[limit]=10').then(function(response){
      //handle your response here
      // $scope.message = response.data;
      console.log(response.data.data);
      console.log($location.host());
      $scope.res = response.data.data;
    });
}]);;
