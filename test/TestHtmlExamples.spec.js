/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'
import { fixture } from '@open-wc/testing-helpers';
import { chaiDomDiff } from '@open-wc/semantic-dom-diff';

chai.use(chaiDomDiff);

FuiVue.registerAll(Vue)

let converted = 0;
let notConverted = 0;

let moreLog = ['ElementFlag1'];
moreLog = [];

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
      testTemplate(templList[idxTempl]);
    };
  })
}

const testTemplate = function (templ) {
  it(`Template: [${templ.name}]`, async function () {
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
      let html = wrapper.html();
      // html model
      let htmlModel = `<div>${templ.info.model}</div>`;

      if (moreLog.indexOf(templ.name) !== -1) {
        console.log(`---------------- ${templ.name}: model ----------------`);
        console.log(htmlModel);
        console.log(`---------------- ${templ.name}: templ. ----------------`);
        console.log(html);
        console.log(`---------------- ${templ.name}: end ----------------`);
      }

      /*
      //const elHtml = await fixture(html)
      // const elHtmlModel = await fixture(htmlModel)

      chai.expect(html, 'the template differs').dom.to.equal(htmlModel);

      */
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


describe(`Dummy test`, function () {
  it(`Dummy test`, async function () {
    const el = await fixture('<div>  </div>');
    chai.expect(el).dom.to.equal('<div></div>');
  })
})
