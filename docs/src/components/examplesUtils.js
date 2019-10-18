import Vue from 'vue'
import examples from './Examples/examples'

let utils = {};

utils.getCompFromName = (name) => {
  for (let idxPairET in examples) {
    const listElems = examples[idxPairET][1]
    for (let idxPairE in listElems) {
      const listTemplates = listElems[idxPairE][1]
      for (let idxTempl in listTemplates) {
        const comp = listTemplates[idxTempl];
        if (name === comp.name) return comp;
      }
    }
  }
}

utils.registerComponents = (elemType, elem, name) => {
  // register all elements/button examples
  for (let idxPairET in examples) {
    const [et,listElems] = examples[idxPairET]
    if (elemType !== '' && et !== elemType) continue;
    for (let idxPairE in listElems) {
      const [e,listTemplates] = listElems[idxPairE]
      if (elem !== '' && e !== elem) continue;
      for (let idxTempl in listTemplates) {
        const comp = listTemplates[idxTempl];
        if (name === '' || name === comp.name)
          Vue.component(comp.name, comp);
      }
    }
  }
}

export default utils
