/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'

FuiVue.registerAll(Vue)

let converted = 0;
let notConverted = 0;

const testElementType = function (et, elemList) {
  describe(`Element type: [${et}]`, () => {
    for (let idxPaitE in elemList) {
      let [e,listTemplates] = elemList[idxPaitE]
      testElement(e,listTemplates);
    };
  })
}

const testElement = function (elem, templList) {
  describe(`Element: [${elem}]`, () => {
    for (let idxTempl in templList) {
      testTemplate(templList[idxTempl]);
    };
  })
}

const testTemplate = function (templ) {
  it(`Template: [${templ.name}]`, function () {
    chai.assert.isTrue('info' in templ,
      'the template has an \'info\' key');
    chai.assert.isTrue('converted' in templ.info,
      'info has \'converted\' key');
    if (templ.info.converted == false ) {
      notConverted += 1;
      return this.skip();
    } else {
      converted += 1;
      const wrapper = mount(templ);
      let html = wrapper.html();
      let htmlModel = `<div>${templ.info.model}</div>`;

      chai.expect(htmlModel, 'the xml of the model is not valid').xml.to.be.valid();
      chai.expect(html, 'the xml of the template is not valid').xml.to.be.valid();

      chai.expect(html, 'the template differs').xml.to.deep.equal(htmlModel);
    }
  })
}

for (let idxPairET in examples) {
  let [et,listTypes] = examples[idxPairET]
  testElementType(et,listTypes);
};
