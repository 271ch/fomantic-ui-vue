<template>
  <div>
    <FuiSegment aligned=right>
      Right
    </FuiSegment>
    <FuiSegment aligned=left>
      Left
    </FuiSegment>
    <FuiSegment aligned=center>
      Center
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentTextAlignment1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Text Alignment',
    description: 'A segment can have its text aligned to a side',
    model: '    <div class="ui right aligned segment">\n' +
      '      Right\n' +
      '    </div>\n' +
      '    <div class="ui left aligned segment">\n' +
      '      Left\n' +
      '    </div>\n' +
      '    <div class="ui center aligned segment">\n' +
      '      Center\n' +
      '    </div>\n',
  },
};
</script>
