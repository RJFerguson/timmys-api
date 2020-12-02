'use strict';

const Lab = require('@hapi/lab');
const Code = require('@hapi/code');
const Manifest = require('../manifest');

const lab = exports.lab = Lab.script();

lab.experiment('Manifest', () => {

    lab.test('it gets manifest data', (done) => {

        Code.expect(Manifest.get('/')).to.be.an.object();
        done();

    });

    lab.test('it gets manifest meta data', (done) => {

        Code.expect(Manifest.meta('/')).to.match(/This file defines Timmys API/i);
        done();

    });

});
