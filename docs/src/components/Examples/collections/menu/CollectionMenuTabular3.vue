<template>
  <div>
    <FuiSegment attached=top>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiMenu attached=bottom tabular>
      <FuiItem a active>
        Active Project
      </FuiItem>
      <FuiItem a>
        Project #2
      </FuiItem>
      <FuiItem a>
        Project #3
      </FuiItem>
      <FuiMenu sub right>
        <FuiItem a>
          <FuiIcon name=add></FuiIcon> New Tab
        </FuiItem>
      </FuiMenu>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuTabular3',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Tabular',
    description: 'A menu can be formatted to show tabs of information',
    model: '    <div class="ui top attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached tabular menu">\n' +
      '      <a class="active item">\n' +
      '        Active Project\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Project #2\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Project #3\n' +
      '      </a>\n' +
      '      <div class="right menu">\n' +
      '        <a class="item">\n' +
      '          <i class="add icon"></i> New Tab\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
