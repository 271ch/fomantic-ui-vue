<template>
  <div>
    <FuiReveal fade>
      <FuiContent visible>
        <FuiImage src="/images/wireframe/square-image.png" size=small></FuiImage>
      </FuiContent>
      <FuiContent hidden>
        <FuiImage src="/images/avatar/large/ade.jpg" size=small></FuiImage>
      </FuiContent>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealFade1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Types',
    title2: 'Fade',
    description: 'An element can disappear to reveal content below',
    model: '    <div class="ui fade reveal">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image">\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/ade.jpg" class="ui small image">\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
