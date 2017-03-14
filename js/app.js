angular.module('BoxApp', ['ngRoute', ]);

angular.module('BoxApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        // controller: 'HomeController'
    })
    .when('/fighters', {
        templateUrl: 'templates/fighters.html',
        // controller: 'RegisterController'
    })
    .when('/fightnights', {
        templateUrl: 'templates/fightnights.html',
        // controller: 'LoginController'
    })
    .when('/media', {
        templateUrl: 'templates/media.html',
        // controller: 'LogoutController'
    })
    .when('/private', {
        templateUrl: 'templates/private.html',
        // controller: 'TodoController'
    });
});