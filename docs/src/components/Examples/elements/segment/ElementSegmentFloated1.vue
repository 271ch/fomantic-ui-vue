<template>
  <div>
    <FuiSegment floated=right>
      <p>This segment will appear to the right</p>
    </FuiSegment>
    <FuiSegment floated=left>
      This segment will appear to the left
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentFloated1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Floated',
    description: 'A segment can appear to the left or right of other content',
    model: '    <div class="ui right floated segment">\n' +
      '      <p>This segment will appear to the right\n' +
      '    </p></div>\n' +
      '    <div class="ui left floated segment">\n' +
      '      This segment will appear to the left\n' +
      '    </div>\n',
  },
};
</script>
