<template>
  <div>
    <div class="ui segments">
      <div class="ui segment">
        <p>Top</p>
      </div>
      <div class="ui red segment">
        <p>Middle</p>
      </div>
      <div class="ui blue segment">
        <p>Middle</p>
      </div>
      <div class="ui green segment">
        <p>Middle</p>
      </div>
      <div class="ui yellow segment">
        <p>Bottom</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentSegments3',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
