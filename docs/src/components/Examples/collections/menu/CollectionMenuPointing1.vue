<template>
  <div>
    <FuiMenu pointing>
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
        <FuiItem>
          <FuiInput transparent icon placeholder="Search...">
            <FuiIcon name=search link></FuiIcon>
          </FuiInput>
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
    <FuiSegment>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuPointing1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Pointing',
    description: 'A menu can point to show its relationship to nearby content',
    model: '    <div class="ui pointing menu">\n' +
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
      '        <div class="item">\n' +
      '          <div class="ui transparent icon input">\n' +
      '            <input type="text" placeholder="Search...">\n' +
      '            <i class="search link icon"></i>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
