<template>
  <div>
    <FuiGrid column=two padded=vertically>
      <FuiColumn>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridPadded2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Padded',
    description: '???',
    model: '      <div class="ui two column vertically padded grid">\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
