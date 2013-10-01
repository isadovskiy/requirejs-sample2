define(['./jquery-wrapper'], function (wrapper) {

    return {

        getStuff: function () {
            return 'This content is generated using `' + wrapper.version +  '` jquery wrapper version';
        }

    };

});