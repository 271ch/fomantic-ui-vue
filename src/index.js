import Vue from 'vue'
// Import vue component
import  fuiButton from './elements/button/button.vue'
import  fuiButtonContent from './elements/button/button-content.vue'
import  fuiButtonGroup from './elements/button/button-group.vue'

console.log('Package fomantic-ui-vue loaded.');

const comps = require.context('.', true, /\.vue$/i)

const registerAll = (v) => {
	for (const key of comps.keys()) {
	  v.component(comps(key).default.name, comps(key).default);
	}
	console.log('fomantic-ui-vue: all components have been registered.');
};

const formatName = (n) => {
	// from fui-button-group to fuiButtonGroup
	return n.split('-')
		.map((w,i) =>
			(i>0)? w.substring(0, 1).toUpperCase() + w.substring(1) : w)
		.join('')
}

let components = {}
for (const key of comps.keys()) {
	components[formatName(comps(key).default.name)] = comps(key).default
}

export default {
	registerAll: registerAll,
	components: components
};
