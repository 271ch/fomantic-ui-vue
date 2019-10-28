<template>
  <div>
    <FuiGrid column=two stackable>
      <FuiColumn>
        <FuiSegment>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
      <FuiColumn>
        <FuiSegment>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridStackable1A',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Stackable',
    description: 'A grid can have its columns stack on-top of each other after reaching mobile breakpoints',
    model: '      <div class="ui two column stackable grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui segment">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
