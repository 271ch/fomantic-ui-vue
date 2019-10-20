<template>
  <div>
    <div class="ui ignored message">
       Unless a size is specified, images will use the original dimensions of the image up to the size of its container..
    </div>
    <div class="ui ignored info message">
      You can specify an <code>img</code> or <code>svg</code> as a <code>ui image</code> or use a child element.
    </div>
    <img src="/images/wireframe/image.png" class="ui small image">
  </div>
</template>

<script>
export default {
  name: 'ElementImageImage1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'image',
    title1: 'Types',
    title2: 'Image',
    description: 'An image',
    model: '    <div class="ui ignored message">\n' +
      '       Unless a size is specified, images will use the original dimensions of the image up to the size of its container..\n' +
      '    </div>\n' +
      '    <div class="ui ignored info message">\n' +
      '      You can specify an <code>img</code> or <code>svg</code> as a <code>ui image</code> or use a child element.\n' +
      '    </div>\n' +
      '    <img src="/images/wireframe/image.png" class="ui small image">\n',
  },
};
</script>
