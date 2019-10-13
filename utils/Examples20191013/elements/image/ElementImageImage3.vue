<template>
  <div>
    <div class="ui small image">
      <svg width="150" height="150">
        <image xlink:href="/images/wireframe/image.png" x="0" y="0" width="100%" height="100%"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementImageImage3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Types',
      title2: 'Image',
      description: 'An image',
      model: '    <div class="ui small image">\n' +
      '      <svg width="150" height="150">\n' +
      '        <image xlink:href="/images/wireframe/image.png" x="0" y="0" width="100%" height="100%"/>\n' +
      '      </svg>\n' +
      '    </div>\n',
    };
  },
};
</script>
