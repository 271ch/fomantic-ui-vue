<template>
  <div>
    <FuiLabel tag=a>
      <FuiImage src="/images/avatar/small/elliot.jpg" spaced=right avatar></FuiImage>
      Elliot
    </FuiLabel>
    <FuiLabel tag=a src="/images/avatar/small/stevie.jpg">
      Stevie
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage1A',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Image',
    description: 'A label can include an image',
    model: '    <a class="ui label">\n' +
      '      <img src="/images/avatar/small/elliot.jpg" class="ui right spaced avatar image">\n' +
      '      Elliot\n' +
      '    </a>\n' +
      '    <a class="ui label">\n' +
      '      <img src="/images/avatar/small/stevie.jpg">\n' +
      '      Stevie\n' +
      '    </a>\n',
  },
};
</script>
