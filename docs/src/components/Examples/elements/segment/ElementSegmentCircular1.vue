<template>
  <div>
    <FuiSegment circular>
      <FuiHeader level=2>
        Buy Now
        <FuiSubheader>$10.99</FuiSubheader>
      </FuiHeader>
    </FuiSegment>
    <FuiSegment inverted circular>
      <FuiHeader level=2 inverted>
        Buy Now
        <FuiSubheader>$10.99</FuiSubheader>
      </FuiHeader>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentCircular1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Circular',
    description: 'A segment can be circular',
    model: '    <div class="ui circular segment">\n' +
      '      <h2 class="ui header">\n' +
      '        Buy Now\n' +
      '        <div class="sub header">$10.99</div>\n' +
      '      </h2>\n' +
      '    </div>\n' +
      '    <div class="ui inverted circular segment">\n' +
      '      <h2 class="ui inverted header">\n' +
      '        Buy Now\n' +
      '        <div class="sub header">$10.99</div>\n' +
      '      </h2>\n' +
      '    </div>\n',
  },
};
</script>
