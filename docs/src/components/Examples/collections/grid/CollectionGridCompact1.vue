<template>
  <div>
    <FuiDivider></FuiDivider>
    <FuiGrid column=two compact celled=internally>
      <FuiRow>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridCompact1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Variations',
    title2: 'Compact',
    description: '???',
    model: '      <div class="ui divider"></div>\n' +
      '      <div class="ui two column compact internally celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
