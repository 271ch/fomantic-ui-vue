<template>
  <div>
    <FuiMenu vertical pointing>
      <FuiItem a active>
        Home
      </FuiItem>
      <FuiItem a>
        Messages
      </FuiItem>
      <FuiItem a>
        Friends
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu4',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Vertical Menu',
    description: 'A vertical menu displays elements vertically..',
    model: '    <div class="ui pointing vertical menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Friends\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
