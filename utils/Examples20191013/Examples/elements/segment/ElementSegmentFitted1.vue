<template>
  <div>
    <div class="ui fitted segment">
        <p>Fitted Segment</p>
    </div>
    <div class="ui horizontally fitted segment">
        <p>Horizontally fitted segment</p>
    </div>
    <div class="ui vertically fitted segment">
        <p>Vertically fitted segment</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentFitted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Fitted',
      description: 'A segment can remove its padding, vertically or horizontally',
      model: '    <div class="ui fitted segment">\n' +
      '        <p>Fitted Segment</p>\n' +
      '    </div>\n' +
      '    <div class="ui horizontally fitted segment">\n' +
      '        <p>Horizontally fitted segment</p>\n' +
      '    </div>\n' +
      '    <div class="ui vertically fitted segment">\n' +
      '        <p>Vertically fitted segment</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
