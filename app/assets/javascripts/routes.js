App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            controller: 'HomeController',
            templateUrl: 'partials/home.html'
        }).
        when('/main/:mainId', {
            controller: 'MainController',
            templateUrl: 'partials/main.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);