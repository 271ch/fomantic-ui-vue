<template>
  <div>
    <div class="ui compact segment">
      <p>Pellentesque habitant morbi</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentCompact1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Compact',
      description: 'A segment may take up only as much space as is necessary',
      model: '    <div class="ui compact segment">\n' +
      '      <p>Pellentesque habitant morbi</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
