<template>
  <div>
    <div class="ui clearing segment">
      <div class="ui right floated button">Floated</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentClearing1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Clearing',
      description: 'A segment can clear floated content',
      model: '    <div class="ui clearing segment">\n' +
      '      <div class="ui right floated button">Floated</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
