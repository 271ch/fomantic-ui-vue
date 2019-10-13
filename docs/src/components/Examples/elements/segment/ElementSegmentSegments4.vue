<template>
  <div>
    <div class="ui segments">
      <div class="ui segment">
        <p>Top</p>
      </div>
      <div class="ui secondary segment">
        <p>Secondary Content</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentSegments4',
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
      '      <div class="ui secondary segment">\n' +
      '        <p>Secondary Content</p>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
