<template>
  <div>
    <img class="ui medium bordered image" src="/images/wireframe/white-image.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementImageBordered1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Variations',
      title2: 'Bordered',
      description: 'An image may include a border to emphasize the edges of white or transparent content',
      model: '    <img class="ui medium bordered image" src="/images/wireframe/white-image.png"/>\n',
    };
  },
};
</script>
