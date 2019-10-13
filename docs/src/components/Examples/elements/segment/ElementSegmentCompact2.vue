<template>
  <div>
    <div class="ui compact segments">
      <div class="ui segment">
        <p>Pellentesque habitant morbi</p>
      </div>
      <div class="ui segment">
        <p>Pellentesque habitant morbi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentCompact2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Compact',
      description: 'A segment may take up only as much space as is necessary',
      model: '    <div class="ui compact segments">\n' +
      '      <div class="ui segment">\n' +
      '        <p>Pellentesque habitant morbi</p>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <p>Pellentesque habitant morbi</p>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
