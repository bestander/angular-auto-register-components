define([], function() {

    var modules = arguments;

    return function registerAllInjects(_module) {
        for (var i = 0, j = modules.length; i < j; i++) {
            if (modules[i] && typeof (modules[i].register) == "function") {
                modules[i].register(_module);
            }
        }
    }
});
