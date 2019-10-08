import Vue from 'vue'
// Import vue component
import  FuiButton from './elements/button/button.vue'
import  FuiButtonContent from './elements/button/button-content.vue'
import  FuiButtonGroup from './elements/button/button-group.vue'

console.log('Package fomantic-ui-vue loaded.');

const comps = require.context('.', true, /\.vue$/i)

const registerAll = (v) => {
	for (const key of comps.keys()) {
	  v.component(comps(key).default.name, comps(key).default);
	}
	console.log('fomantic-ui-vue: all components have been registered.');
};

let components = {}
for (const key of comps.keys()) {
	components[comps(key).default.name] = comps(key).default
}

export default {
	registerAll: registerAll,
	components: components,
};
