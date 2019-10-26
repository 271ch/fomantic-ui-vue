<template>
  <div>
    <FuiSegment>
      <FuiLoader disabled></FuiLoader>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'States',
    title2: 'Disabled',
    description: 'A loader can be disabled or hidden',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui disabled loader"></div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
