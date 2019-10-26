<template>
  <div>
    <FuiMenu secondary vertical>
      <FuiItem a active>
        Account
      </FuiItem>
      <FuiItem a>
        Settings
      </FuiItem>
      <FuiItem dropdown>
        <FuiIcon name=dropdown></FuiIcon>
        Display Options
        <FuiMenu sub header="Text Size">
          <FuiItem a>Small</FuiItem>
          <FuiItem a>Medium</FuiItem>
          <FuiItem a>Large</FuiItem>
        </FuiMenu>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Vertical Menu',
    description: 'A vertical menu displays elements vertically..',
    model: '    <div class="ui secondary vertical menu">\n' +
      '      <a class="active item">\n' +
      '        Account\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Settings\n' +
      '      </a>\n' +
      '      <div class="ui dropdown item">\n' +
      '        <i class="dropdown icon"></i>\n' +
      '        Display Options\n' +
      '        <div class="menu">\n' +
      '          <div class="header">Text Size</div>\n' +
      '          <a class="item">Small</a>\n' +
      '          <a class="item">Medium</a>\n' +
      '          <a class="item">Large</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
