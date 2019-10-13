<template>
  <div>
    <a href="http://google.com" class="ui medium image">
      <img src="/images/wireframe/image-text.png"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ElementImageImageLink1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'image',
      title1: 'Types',
      title2: 'Image Link',
      description: 'An image can be formatted to link to other content',
      model: '    <a href="http://google.com" class="ui medium image">\n' +
      '      <img src="/images/wireframe/image-text.png"/>\n' +
      '    </a>\n',
    };
  },
};
</script>
