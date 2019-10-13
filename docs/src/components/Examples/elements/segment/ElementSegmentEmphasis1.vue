<template>
  <div>
    <div class="ui segment">
      <p>I'm here to tell you something, and you will probably read me first.</p>
    </div>
    <div class="ui secondary segment">
      <p>I am pretty noticeable but you might check out other content before you look at me.</p>
    </div>
    <div class="ui tertiary segment">
      <p>If you notice me you must be looking very hard.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentEmphasis1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'segment',
      title1: 'Variations',
      title2: 'Emphasis',
      description: 'A segment can be formatted to appear more or less noticeable',
      model: '    <div class="ui segment">\n' +
      '      <p>I\'m here to tell you something, and you will probably read me first.</p>\n' +
      '    </div>\n' +
      '    <div class="ui secondary segment">\n' +
      '      <p>I am pretty noticeable but you might check out other content before you look at me.</p>\n' +
      '    </div>\n' +
      '    <div class="ui tertiary segment">\n' +
      '      <p>If you notice me you must be looking very hard.</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
