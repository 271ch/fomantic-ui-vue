const comps = require.context('.', true, /\.vue$/i); // eslint-disable-line no-undef

const registerAll = (v) => {
  for (const key of comps.keys()) {
    v.component(comps(key).default.name, comps(key).default);
  }
};

let components = {};
for (const key of comps.keys()) {
  components[comps(key).default.name] = comps(key).default;
}

export default {
  registerAll: registerAll,
  components: components,
};
