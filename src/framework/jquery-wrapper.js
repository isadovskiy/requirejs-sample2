define(['jquery'], function ($) {

    return {

        version: 'original',

        each: function () {
            return $.each.apply($, arguments);
        }

    };

});