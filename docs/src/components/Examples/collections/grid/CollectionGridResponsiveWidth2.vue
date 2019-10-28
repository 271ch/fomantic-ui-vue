<template>
  <div>
    <FuiGrid>
      <FuiColumn largescreen=two widescreen=one>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn largescreen=two widescreen=one>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn largescreen=two widescreen=one>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
      <FuiColumn largescreen=two widescreen=one>
        <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridResponsiveWidth2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Variations',
    title2: 'Responsive Width',
    description: 'A column can specify a width for a specific device',
    model: '      <div class="ui grid">\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '        <div class="four wide two wide large screen one wide widescreen column">\n' +
      '          <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
