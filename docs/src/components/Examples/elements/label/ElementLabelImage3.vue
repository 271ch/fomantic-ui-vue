<template>
  <div>
    <FuiLabel image="/images/avatar/small/ade.jpg">
      Adrienne
      <FuiIcon name=delete></FuiIcon>
    </FuiLabel>
    <FuiLabel image="/images/avatar/small/zoe.jpg">
      Zoe
      <FuiIcon name=delete></FuiIcon>
    </FuiLabel>
    <FuiLabel image="/images/avatar/small/nan.jpg">
      Nan
      <FuiIcon name=delete></FuiIcon>
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Image',
    description: 'A label can be formatted to emphasize an image',
    model: '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/ade.jpg">\n' +
      '      Adrienne\n' +
      '      <i class="delete icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/zoe.jpg">\n' +
      '      Zoe\n' +
      '      <i class="delete icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/nan.jpg">\n' +
      '      Nan\n' +
      '      <i class="delete icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
