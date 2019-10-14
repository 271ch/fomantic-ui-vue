/* eslint-disable */

// Step 1: make this test compile
//    - `import b` should work also without the ending `vue`
//    - no compilation error (TypeError: Super expression must either be null or a function)
// Step 2: replace `expect('1').toMatch('1')` with
//                 `expect(b.converted).toMatch(true)`
// Step 3: run the test on all components, see commented code at the bottom

import Vue from 'vue'
// import FuiVue from '../src'

import { shallowMount } from '@vue/test-utils'
// import examples from '../docs/src/components/Examples/examples'
import b from '../docs/src/components/Examples/elements/button/ElementButtonButton1'


describe('dummy', () => {
  it('dummy test', () => {
    expect('1').toMatch('1')
    // expect(b.converted).toMatch(true)
  })
})

/*
for (let et in examples) {
  describe(et[0], () => {
    for (let e in et[1]) {
      describe(e[0], () => {
        for (let c in e[1]) {
          it(c, () => {
            expect(e[1][c].converted).toMatch(true)
          })
        }
      })
    }
  })
}
*/
