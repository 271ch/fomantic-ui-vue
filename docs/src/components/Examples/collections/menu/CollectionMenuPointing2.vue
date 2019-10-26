<template>
  <div>
    <FuiMenu secondary pointing>
      <FuiItem a active>
        Home
      </FuiItem>
      <FuiItem a>
        Messages
      </FuiItem>
      <FuiItem a>
        Friends
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem a>
          Logout
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
    <FuiSegment>
      <FuiImage src="/images/wireframe/media-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPointing2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A menu can point to show its relationship to nearby content',
    model: '    <div class="ui secondary pointing menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Friends\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <a class="item">\n' +
      '          Logout\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <img src="/images/wireframe/media-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
