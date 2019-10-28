<template>
  <div>
    <FuiGrid>
      <FuiColumn wide=four>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn wide=nine>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn wide=three>
        <FuiImage src="/images/wireframe/media-paragraph.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumnWidth1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Column Width',
    description: 'A column can vary in width taking up more than a single grid column.',
    model: '      <div class="ui grid">\n' +
      '        <div class="four wide column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="nine wide column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="three wide column">\n' +
      '          <img src="/images/wireframe/media-paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
