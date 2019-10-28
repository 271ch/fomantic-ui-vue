<template>
  <div>
      <div class="ui right aligned category search">
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
  name: 'ModuleSearchAligned1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Variations',
    title2: 'Aligned',
    description: 'A search can have its results aligned to its left or right container edge',
    model: '      <div class="ui right aligned category search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search animals..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
