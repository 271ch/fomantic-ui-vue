<template>
  <div>
    <FuiGrid column=five doubling>
      <FuiColumn>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridDoubling1A',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Doubling',
    description: 'A grid can double its column width on tablet and mobile sizes',
    model: '      <div class="ui doubling five column grid">\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
