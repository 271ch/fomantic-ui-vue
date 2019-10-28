<template>
  <div>
      <div class="ui search">
        <input class="prompt" type="text" placeholder="Common passwords..."/>
        <div class="results"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchStandard1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Standard',
    description: 'A search can display a set of results',
    model: '      <div class="ui search">\n' +
      '        <input class="prompt" type="text" placeholder="Common passwords..."/>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
