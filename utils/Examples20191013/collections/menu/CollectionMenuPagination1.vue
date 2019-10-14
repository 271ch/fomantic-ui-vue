<template>
  <div>
    <div class="ui pagination menu">
      <a class="active item">
        1
      </a>
      <div class="disabled item">
        ...
      </div>
      <a class="item">
        10
      </a>
      <a class="item">
        11
      </a>
      <a class="item">
        12
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPagination1',
  info: {
    converted: false,
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
