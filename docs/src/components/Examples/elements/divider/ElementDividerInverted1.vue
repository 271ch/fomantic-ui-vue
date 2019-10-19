<template>
  <div>
    <FuiSegment inverted>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <FuiDivider inverted></FuiDivider>
      <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
      <h4 class="ui horizontal inverted divider">
        Horizontal
      </h4>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerInverted1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'divider',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A divider can have its colors inverted',
    model: '    <div class="ui inverted segment">\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <div class="ui inverted divider"></div>\n' +
      '      <img class="ui wireframe image" src="/images/wireframe/short-paragraph.png"/>\n' +
      '      <h4 class="ui horizontal inverted divider">\n' +
      '        Horizontal\n' +
      '      </h4>\n' +
      '    </div>\n',
  },
};
</script>
