<template>
  <div>
    <div class="ui secondary vertical menu">
      <a class="active item">
        Account
      </a>
      <a class="item">
        Settings
      </a>
      <div class="ui dropdown item">
        <i class="dropdown icon"></i>
        Display Options
        <div class="menu">
          <div class="header">Text Size</div>
          <a class="item">Small</a>
          <a class="item">Medium</a>
          <a class="item">Large</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu2',
  info: {
    converted: false,
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
