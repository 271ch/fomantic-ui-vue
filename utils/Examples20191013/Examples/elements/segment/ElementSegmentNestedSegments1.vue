<template>
  <div>
    <div class="ui segments">
      <div class="ui segment">
        <p>Top</p>
      </div>
      <div class="ui segments">
        <div class="ui segment">
          <p>Nested Top</p>
        </div>
        <div class="ui segment">
          <p>Nested Middle</p>
        </div>
        <div class="ui segment">
          <p>Nested Bottom</p>
        </div>
      </div>
      <div class="ui segment">
        <p>Middle</p>
      </div>
      <div class="ui horizontal segments">
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
      <div class="ui segment">
        <p>Bottom</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentNestedSegments1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
