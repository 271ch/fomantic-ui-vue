<template>
  <div>
    <FuiMenu compact vertical icon=labeled>
      <FuiItem a>
        <FuiIcon name=gamepad></FuiIcon>
        Games
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video camera"></FuiIcon>
        Channels
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video play"></FuiIcon>
        Videos
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuCompact2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Compact',
    description: 'A menu can take up only the space necessary to fit its content',
    model: '    <div class="ui compact vertical labeled icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"></i>\n' +
      '        Games\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"></i>\n' +
      '        Channels\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"></i>\n' +
      '        Videos\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
