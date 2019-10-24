<template>
  <div>
    <FuiSegment color=brown loading=double>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment color=brown loading="usual double">
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentLoading2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'States',
    title2: 'Loading',
    description: 'A segment may show its content is being loaded',
    model: '    <div class="ui brown double loading segment">\n' +
      '        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui brown usual double loading segment">\n' +
      '        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
