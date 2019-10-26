<template>
  <div>
    <FuiMenu inverted vertical pointing>
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
  name: 'CollectionMenuInverted3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A menu may have its colors inverted to show greater contrast',
    model: '    <div class="ui inverted pointing vertical menu">\n' +
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
