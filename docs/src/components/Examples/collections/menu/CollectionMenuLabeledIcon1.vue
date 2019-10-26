<template>
  <div>
    <FuiMenu icon=labeled>
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
    <br><br>
    <FuiMenu vertical icon=labeled>
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
  name: 'CollectionMenuLabeledIcon1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Labeled Icon',
    description: 'A menu may have labeled icons',
    model: '    <div class="ui labeled icon menu">\n' +
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
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui vertical labeled icon menu">\n' +
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
