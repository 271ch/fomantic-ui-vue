<template>
  <div>
    <FuiSegments piled>
      <FuiSegment>
        <p>Top</p>
      </FuiSegment>
      <FuiSegment>
        <p>Middle</p>
      </FuiSegment>
      <FuiSegment>
        <p>Bottom</p>
      </FuiSegment>
    </FuiSegments>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPiledSegments1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Groups',
    title2: 'Piled Segments',
    description: 'A group of segments can be piled',
    model: '    <div class="ui piled segments">\n' +
      '      <div class="ui segment">\n' +
      '        <p>Top</p>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <p>Middle</p>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <p>Bottom</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
