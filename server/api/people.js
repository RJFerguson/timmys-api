'use strict';

exports.plugin = {
    name: 'people',
    register: function (server, options) {
        server.route({
            method: 'GET',
            path: '/people',
            handler: function (request) {
                return {};
            }
        });
    }
};