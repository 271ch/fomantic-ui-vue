<template>
  <div>
    <FuiSegment>
      <FuiLoader active></FuiLoader>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderActive1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'States',
    title2: 'Active',
    description: 'A loader can be active or visible',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui active loader"></div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
