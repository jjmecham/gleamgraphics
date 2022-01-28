var App = angular.module('App', []);

App.controller('MainCtrl', function($scope, $http) {
  $http.get('patients.json')
       .then(function(res){
          $scope.patients = res.data;

          $scope.select = function(item) {
           $scope.selected = item;
          }                
        });

       $scope.selected = {};
});