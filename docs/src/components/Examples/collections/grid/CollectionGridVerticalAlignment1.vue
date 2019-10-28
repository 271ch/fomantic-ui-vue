<template>
  <div>
    <FuiGrid aligned=middle column=four centered>
      <FuiRow>
        <FuiColumn>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridVerticalAlignment1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Vertical Alignment',
    description: 'A grid, row, or column can specify its vertical alignment to have all its columns vertically centered.',
    model: '      <div class="ui four column middle aligned centered grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
