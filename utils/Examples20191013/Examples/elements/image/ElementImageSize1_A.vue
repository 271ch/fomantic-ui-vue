<template>
  <div>
    <div class="ui tiny images">
      <img class="ui image" src="/images/wireframe/image.png"/>
      <img class="ui image" src="/images/wireframe/image.png"/>
      <img class="ui image" src="/images/wireframe/image.png"/>
      <img class="ui image" src="/images/wireframe/image.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementImageSize1_A',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Groups',
      title2: 'Size',
      description: 'A group of images can be formatted to have the same size.',
      model: '    <div class="ui tiny images">\n' +
      '      <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '      <img class="ui image" src="/images/wireframe/image.png"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
