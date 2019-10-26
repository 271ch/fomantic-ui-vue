<template>
  <div>
    <FuiReveal small fade image>
      <FuiRevealImage src="/images/wireframe/square-image.png" visible></FuiRevealImage>
      <FuiRevealImage src="/images/avatar/large/ade.jpg" hidden></FuiRevealImage>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealFade2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Types',
    title2: 'Fade',
    description: 'An element can disappear to reveal content below',
    model: '    <div class="ui small fade reveal image">\n' +
      '      <img src="/images/wireframe/square-image.png" class="visible content">\n' +
      '      <img src="/images/avatar/large/ade.jpg" class="hidden content">\n' +
      '    </div>\n',
  },
};
</script>
