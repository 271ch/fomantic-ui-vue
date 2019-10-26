<template>
  <div>
    <FuiSegment>
      <FuiDimmer active>
        <FuiLoader text>Loading</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderTextLoader1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Types',
    title2: 'Text Loader',
    description: 'A loader can contain text',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
