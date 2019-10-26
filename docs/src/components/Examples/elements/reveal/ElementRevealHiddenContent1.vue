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
  name: 'ElementRevealHiddenContent1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'Content',
    title2: 'Hidden Content',
    description: 'A reveal may contain content that is hidden before user interaction',
    model: '    <div class="ui small fade reveal image">\n' +
      '      <img src="/images/wireframe/square-image.png" class="visible content">\n' +
      '      <img src="/images/avatar/large/ade.jpg" class="hidden content">\n' +
      '    </div>\n',
  },
};
</script>
