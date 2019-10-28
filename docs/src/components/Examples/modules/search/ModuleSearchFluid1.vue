<template>
  <div>
      <div class="ui fluid category search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search animals..."/>
          <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchFluid1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'A search can have its results take up the width of its container',
    model: '      <div class="ui fluid category search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search animals..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
