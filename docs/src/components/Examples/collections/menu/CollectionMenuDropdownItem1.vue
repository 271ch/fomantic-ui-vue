<template>
  <div>
    <FuiMenu vertical>
      <FuiItem dropdown>
        Categories
        <FuiIcon name=dropdown></FuiIcon>
        <FuiMenu sub>
          <FuiItem a>Electronics</FuiItem>
          <FuiItem a>Automotive</FuiItem>
          <FuiItem a>Home</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuDropdownItem1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Dropdown Item',
    description: 'An item may contain a nested menu in a',
    model: '    <div class="ui vertical menu">\n' +
      '      <div class="ui dropdown item">\n' +
      '        Categories\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        <div class="menu">\n' +
      '          <a class="item">Electronics</a>\n' +
      '          <a class="item">Automotive</a>\n' +
      '          <a class="item">Home</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
