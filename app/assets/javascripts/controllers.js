App.controller('HomeController', ['$scope', function($scope) {

}]);

App.controller('MainController', ['$scope', '$routeParams', 'ConfigurationService', 'DataService',
    function($scope, $routeParams, ConfigurationService, DataService) {

    var section = $routeParams.mainId;

    $scope.section = section;
    $scope.contentTemplateUrl = 'partials/' + section + '.html';

    ConfigurationService.get().$then(function(resource) {
        $scope.toolbars = resource.data.toolbars;
        $scope.sections = resource.data.sections;
        $scope.sections[section].cls = 'active';
    });

    $scope.undo = function() {
        console.log('undo');
    };

    $scope.redo = function() {
        console.log('redo');
    };

    $scope.save = function() {
        DataService.save();
    };

    $scope.download = function() {
        console.log('download');
    };

}]);

App.controller('MainComposeController', ['$scope', '$resource', 'ConfigurationService', 'DataService',
    function($scope, $resource, ConfigurationService, DataService){

    function isEmptyItem(item, i) {

        var data = $scope.data[item.id][i],
            name;

        for(name in data) {
            if(data.hasOwnProperty(name) && name.indexOf('$$') < 0 && data[name]) {
                return false;
            }
        }

        return true;

    }

    ConfigurationService.get().$then(function(resource) {
        $scope.item = resource.data.form;
    });

    $scope.data = DataService.get();

    $scope.getItemIconClass = function(item, i) {

        var cls = [];

        if(isEmptyItem(item,i) && item.multiple) {
            cls.push('delete');
        }

        return cls.join(' ');

    };

    $scope.onItemIconClick = function(item, i) {

        if(isEmptyItem(item,i)) {
            $scope.data[item.id].splice(i,1);
        }

    };

    $scope.addItem = function(item) {

        if(!$scope.data[item.id]) {
            $scope.data[item.id] = [];
        }

        $scope.data[item.id].push({});

    };

}]);

App.controller('MainPreviewController', ['$scope', 'DataService',
    function($scope, DataService){

    $scope.data = DataService.get();

}]);