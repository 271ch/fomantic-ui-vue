<template>
  <div>
    <FuiSegment>
      <p>I'm here to tell you something, and you will probably read me first.</p>
    </FuiSegment>
    <FuiSegment secondary>
      <p>I am pretty noticeable but you might check out other content before you look at me.</p>
    </FuiSegment>
    <FuiSegment tertiary>
      <p>If you notice me you must be looking very hard.</p>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentEmphasis1',
  info: {
    converted: true,
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
  },
};
</script>
