/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'
var beautify_html = require('js-beautify').html;

FuiVue.registerAll(Vue)

let converted = 0;
let notConverted = 0;

const skipElement = ['icon'];
//const skipElement = [];

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
    for (let idxPaitE in elemList) {
      let [e,listTemplates] = elemList[idxPaitE]
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
  let [et,listTypes] = examples[idxPairET]
  testElementType(et,listTypes);
};
