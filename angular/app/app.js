
var myapp = angular.module('myapp', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'pages/home.html',
    }).
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/work', {
        templateUrl: 'pages/work.html',
    }).
    when('/work1', {
        templateUrl: 'pages/work1.html',
    }).
    when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
    otherwise({
        redirectTo: '/home'
    });

}]);

angular.module('myapp')
    .directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.url(),
                             '#' + $location.url(), //html5: false
                             $location.url()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');   
                    };
                });     
            });
        }
    }
}]);

/* Controllers */

myapp.controller('MainCtrl', function($scope) {
    $scope.navbarCollapsed = false;
});

myapp.controller('carousel', function($scope){
      $scope.myInterval = 3000;
      $scope.slides = [
        {
          image: 'https://lorempixel.com/400/200/'
        },
        {
          image: 'https://lorempixel.com/400/200/food'
        },
        {
          image: 'https://lorempixel.com/400/200/sports'
        },
        {
          image: 'https://lorempixel.com/400/200/people'
        }
      ];
});