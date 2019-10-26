<template>
  <div>
    <FuiMenu>
      <FuiItem search>
        <FuiInput transparent icon prompt placeholder="Search animals...">
          <FuiIcon name=search link></FuiIcon>
        </FuiInput>
        <div class="results"/>
      </FuiItem>
    </FuiMenu>
    <FuiSegment>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuSearch1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Search',
    description: 'A menu can contain a',
    model: '    <div class="ui menu">\n' +
      '      <div class="search item">\n' +
      '        <div class="ui transparent icon input">\n' +
      '          <input type="text" placeholder="Search animals..." class="prompt">\n' +
      '          <i class="search link icon"></i>\n' +
      '        </div>\n' +
      '        <div class="results"></div>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
