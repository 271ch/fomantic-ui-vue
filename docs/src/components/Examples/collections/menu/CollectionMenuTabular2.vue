<template>
  <div>
    <FuiMenu attached=top tabular>
      <FuiItem a active>
        Bio
      </FuiItem>
      <FuiItem a>
        Photos
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem>
          <FuiInput transparent icon placeholder="Search users...">
            <FuiIcon name=search link></FuiIcon>
          </FuiInput>
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
    <FuiSegment attached=bottom>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui top attached tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Bio\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Photos\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <div class="item">\n' +
      '          <div class="ui transparent icon input">\n' +
      '            <input type="text" placeholder="Search users...">\n' +
      '            <i class="search link icon"></i>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
