<template>
  <div>
    <FuiReveal active move=left>
      <FuiContent visible>
        <FuiImage src="/images/wireframe/square-image.png" size=small></FuiImage>
      </FuiContent>
      <FuiContent hidden>
        <FuiImage src="/images/avatar/large/nan.jpg" size=small></FuiImage>
      </FuiContent>
    </FuiReveal>
  </div>
</template>

<script>
export default {
  name: 'ElementRevealActive1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'reveal',
    title1: 'States',
    title2: 'Active',
    description: 'An active reveal displays its hidden content',
    model: '    <div class="ui active move left reveal">\n' +
      '      <div class="visible content">\n' +
      '        <img src="/images/wireframe/square-image.png" class="ui small image">\n' +
      '      </div>\n' +
      '      <div class="hidden content">\n' +
      '        <img src="/images/avatar/large/nan.jpg" class="ui small image">\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
