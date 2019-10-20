<template>
  <div>
      <FuiImage src="/images/wireframe/image.png" size=mini></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=tiny></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=small></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=medium></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=large></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=big></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=huge></FuiImage>
      <FuiImage src="/images/wireframe/image.png" size=massive></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementImageSize1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'image',
    title1: 'Variations',
    title2: 'Size',
    description: 'An image may appear at different sizes',
    model: '    <img src="/images/wireframe/image.png" class="ui mini image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui tiny image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui small image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui medium image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui large image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui big image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui huge image">\n' +
      '      <img src="/images/wireframe/image.png" class="ui massive image">\n',
  },
};
</script>
