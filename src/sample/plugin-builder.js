require.undef('framework/jquery-wrapper');

define ('framework/jquery-wrapper', [], function () {
    return {
        version: 'replacement'
    }
});

define(['framework/stuff'], function (stuff) {

    var buildMap = {};

    return {

        load: function (name, req, load, config) {
            buildMap[name] = stuff.getStuff();
            load();
        },

        write: function (pluginName, moduleName, write) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = buildMap[moduleName];
                write('define("' + pluginName + '!' + moduleName + '", [], function () { return "' + content + '"; });\n');
            }
        }

    };

});
