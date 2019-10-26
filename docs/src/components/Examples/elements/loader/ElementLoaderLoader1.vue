<template>
  <div>
    <FuiSegment>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      <FuiDimmer active>
        <FuiLoader></FuiLoader>
      </FuiDimmer>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderLoader1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Types',
    title2: 'Loader',
    description: 'A loader',
    model: '    <div class="ui segment">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <div class="ui active dimmer">\n' +
      '        <div class="ui loader"></div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
