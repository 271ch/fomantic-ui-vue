<template>
  <div>
      <div class="ui category search">
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
  name: 'ModuleSearchCategory1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Category',
    description: 'A search can display results from remote content ordered by categories',
    model: '      <div class="ui category search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Search animals..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
