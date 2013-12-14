(function(module){
    var fromPrototype = function(prototype, object) {
        var newObject = Object.create(prototype);

        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                newObject[prop] = object[prop];
            }
        }


        Object.defineProperty(newObject, 'id', {
            writable: false,
            configurable: true,
            enumerable: false,
            value: (new Date()).getTime()
        });

        Object.defineProperty(newObject, 'version', {
            writable: true,
            configurable: true,
            enumerable: false,
            value: (new Date()).getTime()
        });

        return newObject;
    };


    module.Utils = module.Utils || {};
    module.Utils.fromPrototype = fromPrototype;

    return module;
})(RA);

