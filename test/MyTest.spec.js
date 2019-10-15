/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'
import {compare} from 'dom-compare';

let options = {
  stripSpaces: true,
  compareComments: true,
  collapseSpaces: true,
  normalizeNewlines: true
};

FuiVue.registerAll(Vue)

let converted = 0;
let notConverted = 0;

for (let idxPairET in examples) {
  let [et,listTypes] = examples[idxPairET]
  describe(`Element type: [${et}]`, () => {
    for (let idxPaitT in listTypes) {
      let [e,listTemplates] = listTypes[idxPaitT]
      describe(`Element: [${e}]`, () => {
        for (let idxTempl in listTemplates) {
          it(`Template: [${listTemplates[idxTempl].name}]`, () => {
            chai.assert.equal('converted' in listTemplates[idxTempl].info, true,
              'the template has \'converted\' key');
            if (listTemplates[idxTempl].info.converted == false ) {
              notConverted += 1;
            } else {
              converted += 1;
              chai.assert.equal(listTemplates[idxTempl].info.converted, true,
                'the template is converted');
              // check that the generated html from the template is equivalent
              // to the html saved in the component `[comp].info.model`
              const wrapper = mount(listTemplates[idxTempl]);
              let htmlModel = `<div>${listTemplates[idxTempl].info.model}</div>`;
              let html = wrapper.html();
              const parser = new window.DOMParser();
              const htmlParsed = parser.parseFromString(html, "text/xml");
              const htmlModelParsed = parser.parseFromString(htmlModel, "text/xml");
              chai.assert.isTrue(compare(htmlParsed, htmlModelParsed, options).getResult(),
                'the Vue.js template is correct');
            }
          })
        };
      })
    };
  })
};

describe(`Final check`, () => {
  it(`All templates have been converted`, () => {
    chai.assert.equal(notConverted, 0,
      `${notConverted} templates out of ${converted + notConverted} have not been converted`);
  })
})
