<template>
  <div>
    <FuiItems divided>
      <FuiItem>
        <FuiImage tag=div>
          <img src="/images/wireframe/image.png">
        </FuiImage>
      </FuiItem>
      <FuiItem>
        <FuiImage tag=div>
          <img src="/images/wireframe/image.png">
        </FuiImage>
      </FuiItem>
      <FuiItem>
        <FuiImage tag=div>
          <img src="/images/wireframe/image.png">
        </FuiImage>
      </FuiItem>
    </FuiItems>
  </div>
</template>

<script>
export default {
  name: 'ViewItemImage1',
  info: {
    converted: true,
    elementType: 'views',
    element: 'item',
    title1: 'Content',
    title2: 'Image',
    description: 'An item can contain an image',
    model: '    <div class="ui divided items">\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
