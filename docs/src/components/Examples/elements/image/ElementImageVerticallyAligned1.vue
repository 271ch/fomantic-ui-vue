<template>
  <div>
    <img src="/images/wireframe/square-image.png" class="ui top aligned tiny image">
    <span>Top Aligned</span>
    <div class="ui divider"/>
    <img src="/images/wireframe/square-image.png" class="ui middle aligned tiny image">
    <span>Middle Aligned</span>
    <div class="ui divider"/>
    <img src="/images/wireframe/square-image.png" class="ui bottom aligned tiny image">
    <span>Bottom Aligned</span>
  </div>
</template>

<script>
export default {
  name: 'ElementImageVerticallyAligned1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'image',
    title1: 'Variations',
    title2: 'Vertically Aligned',
    description: 'An image can specify its vertical alignment',
    model: '    <img src="/images/wireframe/square-image.png" class="ui top aligned tiny image">\n' +
      '    <span>Top Aligned</span>\n' +
      '    <div class="ui divider"/>\n' +
      '    <img src="/images/wireframe/square-image.png" class="ui middle aligned tiny image">\n' +
      '    <span>Middle Aligned</span>\n' +
      '    <div class="ui divider"/>\n' +
      '    <img src="/images/wireframe/square-image.png" class="ui bottom aligned tiny image">\n' +
      '    <span>Bottom Aligned</span>\n',
  },
};
</script>
