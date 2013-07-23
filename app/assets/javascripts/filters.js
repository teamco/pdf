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