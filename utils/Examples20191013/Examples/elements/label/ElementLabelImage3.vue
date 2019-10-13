<template>
  <div>
    <div class="ui image label">
      <img src="/images/avatar/small/ade.jpg"/>
      Adrienne
      <i class="delete icon"/>
    </div>
    <div class="ui image label">
      <img src="/images/avatar/small/zoe.jpg"/>
      Zoe
      <i class="delete icon"/>
    </div>
    <div class="ui image label">
      <img src="/images/avatar/small/nan.jpg"/>
      Nan
      <i class="delete icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Types',
      title2: 'Image',
      description: 'A label can be formatted to emphasize an image',
      model: '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/ade.jpg"/>\n' +
      '      Adrienne\n' +
      '      <i class="delete icon"/>\n' +
      '    </div>\n' +
      '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/zoe.jpg"/>\n' +
      '      Zoe\n' +
      '      <i class="delete icon"/>\n' +
      '    </div>\n' +
      '    <div class="ui image label">\n' +
      '      <img src="/images/avatar/small/nan.jpg"/>\n' +
      '      Nan\n' +
      '      <i class="delete icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
