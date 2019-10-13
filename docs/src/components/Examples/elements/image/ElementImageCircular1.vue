<template>
  <div>
    <img class="ui medium circular image" src="/images/wireframe/square-image.png"/>
  </div>
</template>

<script>
export default {
  name: 'ElementImageCircular1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Variations',
      title2: 'Circular',
      description: 'An image may appear circular',
      model: '    <img class="ui medium circular image" src="/images/wireframe/square-image.png"/>\n',
    };
  },
};
</script>
