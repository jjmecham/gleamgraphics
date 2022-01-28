var App = angular.module('App', []);

App.controller('MainCtrl', function($scope, $http, $window) {
  $http.get('patients.json')
       .then(function(res){
          $scope.patients = res.data;

          $scope.select = function(item) {
           $scope.selected = item;
          }                
        });

          $scope.save = function() {
        /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
          $scope.msg = 'Data saved';
         });*/
       $scope.msg = 'Data sent: '+ JSON.stringify($scope.patients);
      };

       $scope.selected = {};

       $scope.doGreeting = function(greeting) {
        $window.alert('Confirm:\n'+$scope.selected.MRN+'\n'+$scope.selected.Name);
      };
}); 