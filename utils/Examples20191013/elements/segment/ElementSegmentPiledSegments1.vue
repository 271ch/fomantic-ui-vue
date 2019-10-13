<template>
  <div>
    <div class="ui piled segments">
      <div class="ui segment">
        <p>Top</p>
      </div>
      <div class="ui segment">
        <p>Middle</p>
      </div>
      <div class="ui segment">
        <p>Bottom</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPiledSegments1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
