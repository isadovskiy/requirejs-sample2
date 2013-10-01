define(['jquery', 'framework/stuff', './plugin!'], function ($, framework, plugin) {

    return function (el) {

        $(el).html(plugin);

    };

});