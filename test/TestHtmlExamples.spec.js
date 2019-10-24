/* eslint-disable */

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import FuiVue from '../src'
import examples from '../docs/src/components/Examples/examples'
var beautify_html = require('js-beautify').html;

let stats = {
  prot: [],
}

/*
let virt_cons = {log: 0, error: 0, warn: 0, info: 0, dir:0};
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("log", (...args) => { virt_cons.log += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("error", (...args) => { virt_cons.error += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("warn", (...args) => { virt_cons.warn += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("info", (...args) => { virt_cons.info += 1; console.log('!!!!!!!!!!!!!!!!!!!');});
virtualConsole.on("dir", (...args) => { virt_cons.dir += 1; console.log('!!!!!!!!!!!!!!!!!!!'); });
const doc = new jsdom.JSDOM(`<body></body>`, {
    virtualConsole: virtualConsole
})
window = doc.window
document = doc.window.document
*/

FuiVue.registerAll(Vue)

const skipDoneElements = true;

let doneElements = ['button', 'divider', 'header', 'icon', 'flag'];
let skipElements = [];
if (skipDoneElements) {
  skipElements = [...skipElements,...doneElements];
}

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

beforeEach(function(){
  stats.prot.push({t: 4, tot: true});
})
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    stats.prot.push({t: 4, fail: true});
  } else if (this.currentTest.state === 'passed') {
    stats.prot.push({t: 4, pass: true});
  }
});

const testElementType = function (et, elemList) {
  describe(`Element type: [${et}]`, function () {
    before(function() {
      stats.prot.push({t: 0, et: et});
    });
    after(function() {
      stats.prot.push({t: 1, et: et});
    });
    for (let idxPairE in elemList) {
      let [e,listTemplates] = elemList[idxPairE]
      testElement(e,listTemplates);
    };
  })
}

const testElement = function (elem, templList) {
  describe(`Element: [${elem}]`, function () {
    before(function() {
      stats.prot.push({t: 2, e: elem});
    });
    after(function() {
      stats.prot.push({t: 3, e: elem});
    });
    for (let idxTempl in templList) {
      testTemplate(elem, templList[idxTempl]);
    };
  })
}

const testTemplate = function (elem, templ) {
  it(`Template: [${templ.name}]`, async function () {
    if (skipElements.indexOf(elem) !== -1) {
      stats.prot.push({t: 4, passSkip: true});
      return this.skip();
    }
    if (skipTemplate.indexOf(templ.name) !== -1) return this.skip();

    chai.assert.isTrue('info' in templ,
      'the template has an \'info\' key');
    chai.assert.isTrue('converted' in templ.info,
      'info has \'converted\' key');
    if (templ.info.converted == false ) {
      return this.skip();
    } else {
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

describe('ROOT SUITE', function () {

  before(async function(){
    // await utils.before()

  })

  for (let idxPairET in examples) {
    let [et,listElements] = examples[idxPairET]
    testElementType(et,listElements);
  };

  after(async function(){
      // await utils.after()

      console.log('\n\n\n');
      let prtResult = (p) => {
        let perc = Math.floor(100.0 * (p[0] + p[3]) / p[2]);
        return `${align(p[0],3)} pass + ${align(p[3],3)} pass' + ${align(p[2]-p[0]-p[1]-p[3],3)} skip + ${align(p[1],3)} fail = ${align(p[2],3)} (${align(perc,3)}%)`;
      }
      let align = (s, n) => {
        let ss = s.toString()
        if (s===0) ss = '';
        let sss = ''
        for(let i = 0; i < n-ss.length; i++) sss += ' ';
        return sss+ss;
      }
      let alignL = (s, n) => {
        let ss = s.toString()
        let sss = ''
        for(let i = 0; i < n-ss.length; i++) sss += ' ';
        return ss+sss;
      }

      let tot = [0,0,0,0]; // pass, fail, tot
      let tot_et = [0,0,0,0]; // pass, fail, tot
      let tot_e = [0,0,0,0]; // pass, fail, tot
      for(let ip in stats.prot) {
        let p = stats.prot[ip];
        if (p.t == 0) {
          //console.log(`${p.et} begin`);
          tot_et = [0,0,0,0]
        } else if (p.t == 1) {
          console.log('..........................................................................');
          console.log(` ${alignL(p.et,11)}      ${prtResult(tot_et)}`);
          console.log();
          tot[0] += tot_et[0]
          tot[1] += tot_et[1]
          tot[2] += tot_et[2]
          tot[3] += tot_et[3]
        } else if (p.t == 2) {
          tot_e = [0,0,0,0]
        } else if (p.t == 3) {
          console.log(` ${alignL(p.e,13)} -> ${prtResult(tot_e)}`);
          tot_et[0] += tot_e[0]
          tot_et[1] += tot_e[1]
          tot_et[2] += tot_e[2]
          tot_et[3] += tot_e[3]
        } else if (p.t == 4) {
          if ('pass' in p) tot_e[0] += 1
          else if ('fail' in p) tot_e[1] += 1
          else if ('tot' in p) tot_e[2] += 1
          else if ('passSkip' in p) tot_e[3] += 1
        }
      }
      console.log('--------------------------------------------------------------------------');
      console.log(` TOTAL            ${prtResult(tot)}`);
  })
})

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
