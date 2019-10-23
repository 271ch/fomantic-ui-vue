<template>
  <div>
    <FuiLabel tag=a image="/images/avatar/small/joe.jpg">
      Joe
    </FuiLabel>
    <FuiLabel tag=a image="/images/avatar/small/elliot.jpg">
      Elliot
    </FuiLabel>
    <FuiLabel tag=a image="/images/avatar/small/stevie.jpg">
      Stevie
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Image',
    description: 'A label can be formatted to emphasize an image',
    model: '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/joe.jpg">\n' +
      '      Joe\n' +
      '    </a>\n' +
      '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/elliot.jpg">\n' +
      '      Elliot\n' +
      '    </a>\n' +
      '    <a class="ui image label">\n' +
      '      <img src="/images/avatar/small/stevie.jpg">\n' +
      '      Stevie\n' +
      '    </a>\n',
  },
};
</script>
