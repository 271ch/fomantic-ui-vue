// Import vue component
import  button from './elements/button/button.vue'
import  buttonGroup from './elements/button/button-group.vue'

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('fui-button', button);
	Vue.component('fui-button-group', buttonGroup);
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default {
  components: {
    button,
		buttonGroup,
  },
}

// if the code above works, it can be replaced with some automatic loading:

/*
// Load every component from the whole folder tree
const req = require.context('.', true, /\.vue$/i)

for (const key of req.keys()) {
  const name = key.match(/\w+/)![0]
  Vue.component(req(key).default.name, req(key).default)
}
*/
