<template>
  <div>
    <FuiReveal small fade image>
      <FuiRevealImage src="/images/avatar/large/ade.jpg" visible></FuiRevealImage>
      <FuiRevealImage src="/images/wireframe/square-image.png" hidden></FuiRevealImage>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealVisibleContent1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Content',
    title2: 'Visible Content',
    description: 'A reveal may contain content that is visible before interaction',
    model: '    <div class="ui small fade reveal image">\n' +
      '      <img src="/images/avatar/large/ade.jpg" class="visible content">\n' +
      '      <img src="/images/wireframe/square-image.png" class="hidden content">\n' +
      '    </div>\n',
  },
};
</script>
