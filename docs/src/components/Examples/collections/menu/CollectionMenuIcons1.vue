<template>
  <div>
    <FuiMenu icon>
      <FuiItem a>
        <FuiIcon name=gamepad></FuiIcon>
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video camera"></FuiIcon>
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video play"></FuiIcon>
      </FuiItem>
    </FuiMenu>
    <br><br>
    <FuiMenu vertical icon>
      <FuiItem a>
        <FuiIcon name=gamepad></FuiIcon>
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video camera"></FuiIcon>
      </FuiItem>
      <FuiItem a>
        <FuiIcon name="video play"></FuiIcon>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuIcons1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Icons',
    description: 'A menu may have just icons',
    model: '    <div class="ui icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"></i>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"></i>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"></i>\n' +
      '      </a>\n' +
      '    </div>\n' +
      '    <br><br>\n' +
      '    <div class="ui vertical icon menu">\n' +
      '      <a class="item">\n' +
      '        <i class="gamepad icon"></i>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video camera icon"></i>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <i class="video play icon"></i>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
