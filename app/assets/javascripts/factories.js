App.factory('ConfigurationService', ['$resource', function($resource){

    var resource = $resource('data/configuration.json'),
        service = {};

    service.get = function() {
        return resource.get();
    };

    return service;

}]);

App.factory('DataService', ['$resource', function($resource){

    var resource = $resource('data/JohnDoe.json:id'),
        service = {},
        cache;

    service.get = function() {
        return cache ? cache : cache = resource.get();
    };

    service.save = function() {
        cache.$save({id:'_save'});
    };

    return service;

}]);