<template>
  <div>
    <FuiSegments>
      <FuiSegment>
        <p>Top</p>
      </FuiSegment>
      <FuiSegment color=red>
        <p>Middle</p>
      </FuiSegment>
      <FuiSegment color=blue>
        <p>Middle</p>
      </FuiSegment>
      <FuiSegment color=green>
        <p>Middle</p>
      </FuiSegment>
      <FuiSegment color=yellow>
        <p>Bottom</p>
      </FuiSegment>
    </FuiSegments>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentSegments3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Groups',
    title2: 'Segments',
    description: 'A group of segments can be formatted to appear together',
    model: '    <div class="ui segments">\n' +
      '      <div class="ui segment">\n' +
      '        <p>Top</p>\n' +
      '      </div>\n' +
      '      <div class="ui red segment">\n' +
      '        <p>Middle</p>\n' +
      '      </div>\n' +
      '      <div class="ui blue segment">\n' +
      '        <p>Middle</p>\n' +
      '      </div>\n' +
      '      <div class="ui green segment">\n' +
      '        <p>Middle</p>\n' +
      '      </div>\n' +
      '      <div class="ui yellow segment">\n' +
      '        <p>Bottom</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
