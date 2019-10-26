<template>
  <div>
    <FuiMenu tabular>
      <FuiItem a active>
        Bio
      </FuiItem>
      <FuiItem a>
        Photos
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui tabular menu">\n' +
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
