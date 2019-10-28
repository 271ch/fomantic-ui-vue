<template>
  <div>
    <FuiGrid>
      <FuiColumn mobile=sixteen tablet=eight computer=four>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn mobile=sixteen tablet=eight computer=four>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn mobile=sixteen tablet=eight computer=four>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn mobile=sixteen tablet=eight computer=four>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn mobile=sixteen tablet=eight computer=four>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridResponsiveWidth1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Responsive Width',
    description: 'A column can specify a width for a specific device',
    model: '      <div class="ui grid">\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="sixteen wide mobile eight wide tablet four wide computer column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
