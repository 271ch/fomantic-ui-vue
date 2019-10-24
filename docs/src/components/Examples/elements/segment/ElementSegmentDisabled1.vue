<template>
  <div>
    <FuiSegment disabled>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'States',
    title2: 'Disabled',
    description: 'A segment may show its content is disabled',
    model: '    <div class="ui disabled segment">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
