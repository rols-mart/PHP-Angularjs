var myApp = angular.module("myModule", []);

myApp.controller("myController", ['$http','$scope', function ($http, $scope) {
  $scope.message = "This is an AngularJS custom messageaaaaaaaaa";

  //GET sample
    //substitute 'param1' and 'param2' for the proper name the API is expecting these parameters
    
    $http.get('http://localhost/drupal/jsonapi/node/article?page[limit]=10').then(function(response){
      //handle your response here
      // $scope.message = response.data;
      console.log(response.data);
      $scope.res = response.data;
    });
}]);;
