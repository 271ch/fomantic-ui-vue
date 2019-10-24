<template>
  <div>
    <FuiSegment fitted>
      <p>Fitted Segment</p>
    </FuiSegment>
    <FuiSegment fitted=horizontally>
      <p>Horizontally fitted segment</p>
    </FuiSegment>
    <FuiSegment fitted=vertically>
      <p>Vertically fitted segment</p>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentFitted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Fitted',
    description: 'A segment can remove its padding, vertically or horizontally',
    model: '    <div class="ui fitted segment">\n' +
      '        <p>Fitted Segment</p>\n' +
      '    </div>\n' +
      '    <div class="ui horizontally fitted segment">\n' +
      '        <p>Horizontally fitted segment</p>\n' +
      '    </div>\n' +
      '    <div class="ui vertically fitted segment">\n' +
      '        <p>Vertically fitted segment</p>\n' +
      '    </div>\n',
  },
};
</script>
