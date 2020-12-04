'use strict';

exports.plugin = {
    name: 'coins',
    register: function (server, options) {
        server.route({
            method: 'GET',
            path: '/coins',
            handler: function (request) {
                return {};
            }
        });
    }
};