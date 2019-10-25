<template>
  <div>
    <FuiSegments horizontal basic>
      <FuiSegment>
        <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      </FuiSegment>
      <FuiSegment>
        <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      </FuiSegment>
      <FuiSegment>
        <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      </FuiSegment>
    </FuiSegments>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentHorizontalSegments2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Groups',
    title2: 'Horizontal Segments',
    description: 'A segment group can appear horizontally',
    model: '    <div class="ui basic horizontal segments">\n' +
      '      <div class="ui segment">\n' +
      '        <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
