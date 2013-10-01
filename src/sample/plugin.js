
/*
// module re-definition works fine in browser

require.undef('framework/jquery-wrapper');

define ('framework/jquery-wrapper', [], function () {
    return {
        version: 'replacement'
    }
});
*/

define(['framework/stuff'], function (stuff) {

    return {

        pluginBuilder: './plugin-builder',

        load: function (name, req, load, config) {
            load(stuff.getStuff());
        }

    };

});