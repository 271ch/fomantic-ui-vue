<template>
  <div>
    <FuiReveal small circular rotate=left image>
      <FuiRevealImage src="/images/wireframe/square-image.png" visible></FuiRevealImage>
      <FuiRevealImage src="/images/avatar/large/veronika.jpg" hidden></FuiRevealImage>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealRotate2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Types',
    title2: 'Rotate',
    description: 'An element can rotate to reveal content below',
    model: '    <div class="ui small circular rotate left reveal image">\n' +
      '      <img src="/images/wireframe/square-image.png" class="visible content">\n' +
      '      <img src="/images/avatar/large/veronika.jpg" class="hidden content">\n' +
      '    </div>\n',
  },
};
</script>
