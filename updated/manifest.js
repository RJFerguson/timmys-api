'use strict';

const Confidence = require('confidence');
const Config = require('../config');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'This file defines Timmys API',
    server: {
        port: Config.get('/port/api')
    },
    register: {
        plugins: [
            {
                plugin: require('../server/api/coins')
            },
            {
                plugin: require('../server/api/reverse')
            },
            {
                plugin: require('../server/api/people')
            }
        ]
    }
};

const store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);

};

exports.meta = function (key) {

    return store.meta(key, criteria);

};
