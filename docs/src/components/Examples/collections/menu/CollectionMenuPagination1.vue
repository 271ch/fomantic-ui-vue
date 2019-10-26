<template>
  <div>
    <FuiMenu pagination>
      <FuiItem a active>
        1
      </FuiItem>
      <FuiItem disabled>
        ...
      </FuiItem>
      <FuiItem a>
        10
      </FuiItem>
      <FuiItem a>
        11
      </FuiItem>
      <FuiItem a>
        12
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPagination1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Pagination',
    description: 'A pagination menu is specially formatted to present links to pages of content',
    model: '    <div class="ui pagination menu">\n' +
      '      <a class="active item">\n' +
      '        1\n' +
      '      </a>\n' +
      '      <div class="disabled item">\n' +
      '        ...\n' +
      '      </div>\n' +
      '      <a class="item">\n' +
      '        10\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        11\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        12\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
