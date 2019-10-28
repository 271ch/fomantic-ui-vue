<template>
  <div>
    <FuiGrid column=three>
      <FuiColumn>
        <FuiSegment>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
      <FuiColumn>
        <FuiSegment>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
      <FuiColumn>
        <FuiSegment>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumnContent1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Columns',
    title2: 'Column Content',
    description: 'Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns.',
    model: '      <div class="ui three column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
