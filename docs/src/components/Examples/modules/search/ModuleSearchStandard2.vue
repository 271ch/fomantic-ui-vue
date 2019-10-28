<template>
  <div>
      <div class="ui ignored info message">
        Using a <a href="/elements/input.html">ui input</a> allows you to use additional input types, like this icon input
      </div>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Common passwords..."/>
          <i class="search icon"/>
        </div>
        <div class="results"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSearchStandard2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'search',
    title1: 'Types',
    title2: 'Standard',
    description: 'A search can display a set of results',
    model: '      <div class="ui ignored info message">\n' +
      '        Using a <a href="/elements/input.html">ui input</a> allows you to use additional input types, like this icon input\n' +
      '      </div>\n' +
      '      <div class="ui search">\n' +
      '        <div class="ui icon input">\n' +
      '          <input class="prompt" type="text" placeholder="Common passwords..."/>\n' +
      '          <i class="search icon"/>\n' +
      '        </div>\n' +
      '        <div class="results"/>\n' +
      '      </div>\n',
  },
};
</script>
