<template>
  <div>
    <FuiSegments>
      <FuiSegment>
        <p>Top</p>
      </FuiSegment>
      <FuiSegments>
        <FuiSegment>
          <p>Nested Top</p>
        </FuiSegment>
        <FuiSegment>
          <p>Nested Middle</p>
        </FuiSegment>
        <FuiSegment>
          <p>Nested Bottom</p>
        </FuiSegment>
      </FuiSegments>
      <FuiSegment>
        <p>Middle</p>
      </FuiSegment>
      <FuiSegments horizontal>
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
      <FuiSegment>
        <p>Bottom</p>
      </FuiSegment>
    </FuiSegments>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentNestedSegments1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Groups',
    title2: 'Nested Segments',
    description: 'A group of segments can be nested in another group of segments',
    model: '    <div class="ui segments">\n' +
      '      <div class="ui segment">\n' +
      '        <p>Top</p>\n' +
      '      </div>\n' +
      '      <div class="ui segments">\n' +
      '        <div class="ui segment">\n' +
      '          <p>Nested Top</p>\n' +
      '        </div>\n' +
      '        <div class="ui segment">\n' +
      '          <p>Nested Middle</p>\n' +
      '        </div>\n' +
      '        <div class="ui segment">\n' +
      '          <p>Nested Bottom</p>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <p>Middle</p>\n' +
      '      </div>\n' +
      '      <div class="ui horizontal segments">\n' +
      '        <div class="ui segment">\n' +
      '          <p>Top</p>\n' +
      '        </div>\n' +
      '        <div class="ui segment">\n' +
      '          <p>Middle</p>\n' +
      '        </div>\n' +
      '        <div class="ui segment">\n' +
      '          <p>Bottom</p>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <p>Bottom</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
