<template>
  <div>
    <FuiList horizontal>
      <FuiItem>
        <FuiImage avatar src="/images/wireframe/square-image.png"></FuiImage>
        <FuiContent aligned=top>Top Aligned</FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/wireframe/square-image.png"></FuiImage>
        <FuiContent aligned=middle>Middle</FuiContent>
      </FuiItem>
      <FuiItem>
        <FuiImage avatar src="/images/wireframe/square-image.png"></FuiImage>
        <FuiContent aligned=bottom>Bottom</FuiContent>
      </FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListVerticallyAligned1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content Variations',
    title2: 'Vertically Aligned',
    description: 'An element inside a list can be vertically aligned',
    model: '    <div class="ui horizontal list">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui avatar image">\n' +
      '        <div class="top aligned content">\n' +
      '          Top Aligned\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui avatar image">\n' +
      '        <div class="middle aligned content">\n' +
      '          Middle\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui avatar image">\n' +
      '        <div class="bottom aligned content">\n' +
      '          Bottom\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
