<template>
  <div>
    <FuiSegment  padded=very>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentPadded2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Padded',
    description: 'A segment can increase its padding',
    model: '    <div class="ui very padded segment">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
