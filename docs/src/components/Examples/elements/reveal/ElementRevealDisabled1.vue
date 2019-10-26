<template>
  <div>
    <FuiReveal disabled move>
      <FuiContent visible>
        <FuiImage src="/images/wireframe/square-image.png" size=small></FuiImage>
      </FuiContent>
      <FuiContent hidden>
        <FuiImage src="/images/avatar/large/chris.jpg" size=small></FuiImage>
      </FuiContent>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'States',
    title2: 'Disabled',
    description: 'A disabled reveal will not animate when hovered',
    model: '    <div class="ui disabled move reveal">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image">\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/chris.jpg" class="ui small image">\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
