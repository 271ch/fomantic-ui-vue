<template>
  <div>
    <div class="ui ignored info message">A circular segment will most likely have to have its content manually sized to be equal width and height, otherwise it will flow to the size of your content</div>
    <div class="ui circular segment">
      <h2 class="ui header">
        Buy Now
        <div class="sub header">$10.99</div>
      </h2>
    </div>
    <div class="ui inverted circular segment">
      <h2 class="ui inverted header">
        Buy Now
        <div class="sub header">$10.99</div>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentCircular1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Circular',
      description: 'A segment can be circular',
      model: '    <div class="ui ignored info message">A circular segment will most likely have to have its content manually sized to be equal width and height, otherwise it will flow to the size of your content</div>\n' +
      '    <div class="ui circular segment">\n' +
      '      <h2 class="ui header">\n' +
      '        Buy Now\n' +
      '        <div class="sub header">$10.99</div>\n' +
      '      </h2>\n' +
      '    </div>\n' +
      '    <div class="ui inverted circular segment">\n' +
      '      <h2 class="ui inverted header">\n' +
      '        Buy Now\n' +
      '        <div class="sub header">$10.99</div>\n' +
      '      </h2>\n' +
      '    </div>\n',
    };
  },
};
</script>
