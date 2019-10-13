<template>
  <div>
    <div class="ui inverted segment">
      <p>I'm here to tell you something, and you will probably read me first.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A segment can have its colors inverted for contrast',
      model: '    <div class="ui inverted segment">\n' +
      '      <p>I\'m here to tell you something, and you will probably read me first.</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
