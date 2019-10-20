<template>
  <div>
    <FuiImage src="/images/wireframe/square-image.png" aligned=top size=tiny></FuiImage>
    <span>Top Aligned</span>
    <FuiDivider></FuiDivider>
    <FuiImage src="/images/wireframe/square-image.png" aligned=middle size=tiny></FuiImage>
    <span>Middle Aligned</span>
    <FuiDivider></FuiDivider>
    <FuiImage src="/images/wireframe/square-image.png" aligned=bottom size=tiny></FuiImage>
    <span>Bottom Aligned</span>
  </div>
</template>

<script>
export default {
  name: 'ElementImageVerticallyAligned1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'image',
    title1: 'Variations',
    title2: 'Vertically Aligned',
    description: 'An image can specify its vertical alignment',
    model: '    <img src="/images/wireframe/square-image.png" class="ui tiny top aligned image">\n' +
      '    <span>Top Aligned</span>\n' +
      '    <div class="ui divider"></div>\n' +
      '    <img src="/images/wireframe/square-image.png" class="ui tiny middle aligned image">\n' +
      '    <span>Middle Aligned</span>\n' +
      '    <div class="ui divider"></div>\n' +
      '    <img src="/images/wireframe/square-image.png" class="ui tiny bottom aligned image">\n' +
      '    <span>Bottom Aligned</span>\n',
  },
};
</script>
