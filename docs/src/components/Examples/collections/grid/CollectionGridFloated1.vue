<template>
  <div>
    <FuiGrid>
      <FuiColumn floated=left wide=five>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn floated=right wide=five>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridFloated1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Floated',
    description: 'A column can sit flush against the left or right edge of a row',
    model: '      <div class="ui grid">\n' +
      '        <div class="five wide left floated column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="five wide right floated column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
