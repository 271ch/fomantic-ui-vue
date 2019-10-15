/* eslint-disable */

require('jsdom-global')()

global.chai = require('chai')
global.chaiXml = require('chai-xml');

global.chai.use(global.chaiXml);
