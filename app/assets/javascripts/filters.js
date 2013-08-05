App.filter('mapToArray', function() {
    return function(value, propertyName) {
        var key,
            arr,
            obj;

        // Check arguments
        if(!angular.isObject(value)) {
            return value;
        }

        // Init
        arr = [];

        // Iterate over object properties
        for(key in value) {
            if(value.hasOwnProperty(key)) {
                obj = value[key];
                // Add key as new property if needed
                if(propertyName) {
                    obj[propertyName] = key;
                }
                arr.push(obj);
            }
        }

        return arr;
    };
});

App.filter('join', function() {
    return function(value, propertyName, divider) {
        var result = [],
            i, l;
        divider = divider || ' ';
        if(angular.isArray(value) && propertyName) {
            for(i=0, l=value.length; i<l; i++) {
                if(value[i].hasOwnProperty(propertyName)) {
                    result.push(value[i][propertyName]);
                }
            }
        }
        return result.join(divider);
    }
});

App.filter('default', function() {
    return function(value, defaultValue) {
        return typeof value === 'number' ?
            (isNaN(value) ? defaultValue : value) :
            (value || defaultValue);
    }
});