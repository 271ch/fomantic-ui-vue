<template>
  <div>
    <FuiMenu text>
      <FuiItem isHeader>Sort By</FuiItem>
      <FuiItem a active>
        Closest
      </FuiItem>
      <FuiItem a>
        Most Comments
      </FuiItem>
      <FuiItem a>
        Most Popular
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuText1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Text',
    description: 'A menu can be formatted for text content',
    model: '    <div class="ui text menu">\n' +
      '      <div class="header item">Sort By</div>\n' +
      '      <a class="active item">\n' +
      '        Closest\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Most Comments\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Most Popular\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
