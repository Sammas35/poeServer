angular
    .module('poeServer')
    .filter('greaterEqual', function () {
        return function (collection, fieldname, comparevalue) {
            var result = [];
            if(comparevalue) {
                _.forEach(collection, function (item) {
                    if (item[fieldname] >= comparevalue) {
                        result.push(item);
                    }
                })
            }else{
                result = collection;
            }
            return result;
        }
    });

