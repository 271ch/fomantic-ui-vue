<template>
  <div>
    <FuiSegment inverted>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiDivider inverted></FuiDivider>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiDivider level=4 horizontal inverted>
        Horizontal
      </FuiDivider>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'divider',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A divider can have its colors inverted',
    model: '    <div class="ui inverted segment">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui inverted divider"></div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <h4 class="ui horizontal inverted divider">\n' +
      '        Horizontal\n' +
      '      </h4>\n' +
      '    </div>\n',
  },
};
</script>
