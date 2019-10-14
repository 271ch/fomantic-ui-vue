<template>
  <div>
    <div class="ui ignored info message">
      Be sure to visit the <a href="/modules/tab.html">tab documentation</a> for information on how to set up dynamic tabs
    </div>
    <div class="ui tabular menu">
      <a class="active item">
        Bio
      </a>
      <a class="item">
        Photos
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui ignored info message">\n' +
      '      Be sure to visit the <a href="/modules/tab.html">tab documentation</a> for information on how to set up dynamic tabs\n' +
      '    </div>\n' +
      '    <div class="ui tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Bio\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Photos\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
