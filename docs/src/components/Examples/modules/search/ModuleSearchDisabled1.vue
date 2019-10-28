<template>
  <div>
      <div class="ui disabled category search">
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
  name: 'ModuleSearchDisabled1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Variations',
    title2: 'Disabled',
    description: 'A search can show it is currently unable to be interacted with',
    model: '      <div class="ui disabled category search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search animals..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
