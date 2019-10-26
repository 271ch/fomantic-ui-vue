<template>
  <div>
    <FuiSegment inverted>
      <FuiMenu inverted secondary>
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
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuInverted4',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A menu may have its colors inverted to show greater contrast',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted secondary menu">\n' +
      '        <a class="active item">\n' +
      '          Home\n' +
      '        </a>\n' +
      '        <a class="item">\n' +
      '          Messages\n' +
      '        </a>\n' +
      '        <a class="item">\n' +
      '          Friends\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
