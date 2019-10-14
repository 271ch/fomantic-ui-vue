/* eslint-disable */

// TODO: if `b.converted == true`, check that the generated html from the
//       template is equivalent (as html) to `b.model`

import Vue from 'vue'

import { shallowMount } from '@vue/test-utils'
import examples from '../docs/src/components/Examples/examples'

for (let a in examples) {
  let [et,bb] = examples[a]
  describe(`Element type: [${et}]`, () => {
    for (let bbb in bb) {
      let [e,b2] = bb[bbb]
      describe(`Element: [${e}]`, () => {
        for (let b in b2) {
          it(`Template ${b2[b].name}`, () => {
            expect(b2[b].info.converted).toBe(true)
          })
        };
      })
    };
  })
};
