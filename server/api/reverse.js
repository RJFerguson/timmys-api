'use strict';

exports.plugin = {
    name: 'reverse',
    register: function (server, options) {
        server.route({
            method: 'GET',
            path: '/reverse',
            handler: function (request) {
                return {};
            }
        });
    }
};