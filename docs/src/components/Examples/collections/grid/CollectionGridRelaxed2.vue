<template>
  <div>
    <FuiGrid column=four relaxed=very>
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
  name: 'CollectionGridRelaxed2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Relaxed',
    description: 'A grid can increase its gutters to allow for more negative space',
    model: '      <div class="ui four column very relaxed grid">\n' +
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
