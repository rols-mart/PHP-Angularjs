var myApp = angular.module("myModule", []);

myApp.controller("myController", ['$http','$scope','$location', function ($http, $scope, $location) {
  $scope.message = "Here is a list of first articles. So, please select a number: ";
  $scope.host = $location.host();
  $scope.articlesNumber = 1;
  $scope.change = function(articlesNumber) {
    console.log(articlesNumber);
    $http.get('http://localhost/drupal/jsonapi/node/article?page[limit]='+$scope.articlesNumber).then(function(response){
      console.log(response.data.data);
      $scope.res = response.data.data;
    });
  };

  $scope.change();
}]);;
