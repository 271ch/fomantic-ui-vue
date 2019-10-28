<template>
  <div>
      <FuiGrid>
        <FuiColumn wide=eight>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=eight>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=eight>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=eight>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumns1A',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Content',
    title2: 'Columns',
    description: 'Columns each contain gutters giving them equal spacing from other columns.',
    model: '      <div class="ui grid">\n' +
      '        <div class="eight wide column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="eight wide column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
