<template>
  <div>
    <FuiGrid column=two>
      <FuiColumn>
        <FuiSegment raised>
          <FuiLabel tag=a color=red ribbon>Overview</FuiLabel>
          <span>Account Details</span>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          <FuiLabel tag=a color=blue ribbon>Community</FuiLabel> User Reviews
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
      <FuiColumn>
        <FuiSegment>
          <FuiLabel tag=a color=orange ribbon=right>Specs</FuiLabel>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
          <FuiLabel tag=a color=teal ribbon=right>Reviews</FuiLabel>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiSegment>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelRibbon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Ribbon',
    description: 'A label can appear as a ribbon attaching itself to an element.',
    model: '    <div class="ui two column grid">\n' +
      '      <div class="column">\n' +
      '        <div class="ui raised segment">\n' +
      '          <a class="ui red ribbon label">Overview</a>\n' +
      '          <span>Account Details</span>\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          <a class="ui blue ribbon label">Community</a> User Reviews\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="column">\n' +
      '        <div class="ui segment">\n' +
      '          <a class="ui orange right ribbon label">Specs</a>\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          <a class="ui teal right ribbon label">Reviews</a>\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
