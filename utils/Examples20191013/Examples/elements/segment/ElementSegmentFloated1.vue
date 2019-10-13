<template>
  <div>
    <div class="ui right floated segment">
      <p>This segment will appear to the right
    </p></div>
    <div class="ui left floated segment">
      This segment will appear to the left
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentFloated1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Floated',
      description: 'A segment can appear to the left or right of other content',
      model: '    <div class="ui right floated segment">\n' +
      '      <p>This segment will appear to the right\n' +
      '    </p></div>\n' +
      '    <div class="ui left floated segment">\n' +
      '      This segment will appear to the left\n' +
      '    </div>\n',
    };
  },
};
</script>
