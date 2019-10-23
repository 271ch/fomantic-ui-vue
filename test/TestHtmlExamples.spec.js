/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'
var beautify_html = require('js-beautify').html;

/*
let virt_cons = {log: 0, error: 0, warn: 0, info: 0, dir:0};
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("log", (...args) => { virt_cons.log += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("error", (...args) => { virt_cons.error += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("warn", (...args) => { virt_cons.warn += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("info", (...args) => { virt_cons.info += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("dir", (...args) => { virt_cons.dir += 1; console.log('!!!!!!!!!!!!!!!!!!!'); });
console.log(virtualConsole);
const document = new jsdom.JSDOM(`<body></body>`, {
    virtualConsole: virtualConsole
})
global.window = document.window
global.document = document.window.document
*/

FuiVue.registerAll(Vue)

let converted = 0;
let notConverted = 0;

const skipElement = ['icon', 'flag'];
//const skipElement = [];
const skipTemplate = ['ViewItemImage1', 'ElementInputAction2', 'ElementInputAction3', 'ElementInputAction5'];

const html_std = function(html) {
  let html2 = html.replace(/<!---->/gm,'').replace(/</gm,'\n<').replace(/>/gm,'>\n').replace(/&amp;/gm,'&');
  let html3 = html2.replace(/\s+$/gm, "").replace(/^\s+/gm, "")
  while (true) {
    let l = html3.length
    html3 = html3.replace('\n\n','\n');
    if (l == html3.length) break;
  }
  return html3;
}

const testElementType = function (et, elemList) {
  describe(`Element type: [${et}]`, function () {
    beforeEach(function() {
      // runs before each test
    });
    for (let idxPairE in elemList) {
      let [e,listTemplates] = elemList[idxPairE]
      testElement(e,listTemplates);
    };
  })
}

const testElement = function (elem, templList) {
  describe(`Element: [${elem}]`, function () {
    for (let idxTempl in templList) {
      testTemplate(elem, templList[idxTempl]);
    };
  })
}

const testTemplate = function (elem, templ) {
  it(`Template: [${templ.name}]`, async function () {
    if (skipElement.indexOf(elem) !== -1) return this.skip();
    if (skipTemplate.indexOf(templ.name) !== -1) return this.skip();

    chai.assert.isTrue('info' in templ,
      'the template has an \'info\' key');
    chai.assert.isTrue('converted' in templ.info,
      'info has \'converted\' key');
    if (templ.info.converted == false ) {
      notConverted += 1;
      return this.skip();
    } else {
      converted += 1;
      // html template
      const wrapper = mount(templ);
      let html = html_std(wrapper.html());
      // html model
      let htmlModel = html_std(`<div>${templ.info.model}</div>`);

      if (templ.name === 'ElementButtonLabeled2') {
        // console.log(html);
      }

      const opts = {};
      let htmlPretty = beautify_html(html, opts );
      let htmlModelPretty = beautify_html(htmlModel, opts);
      chai.expect(htmlPretty, 'the template differs').equal(htmlModelPretty);
    }
  })
}

for (let idxPairET in examples) {
  let [et,listElements] = examples[idxPairET]
  testElementType(et,listElements);
};

/*
describe(`Empty virtual console`, function () {
  it(`Empty `, async function () {
    chai.assert.equal(virt_cons.log, 0, `no log`);
    chai.assert.equal(virt_cons.error, 0, `no error`);
    chai.assert.equal(virt_cons.warn, 0, `no warn`);
    chai.assert.equal(virt_cons.info, 0, `no info`);
    chai.assert.equal(virt_cons.dir, 0, `no dir`);
  })
})
*/
