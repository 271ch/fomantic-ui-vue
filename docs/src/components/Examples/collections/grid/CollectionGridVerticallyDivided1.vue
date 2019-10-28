<template>
  <div>
    <FuiGrid vertically divided>
      <FuiRow column=two>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
      <FuiRow column=three>
        <FuiColumn>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
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
  name: 'CollectionGridVerticallyDivided1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Types',
    title2: 'Vertically Divided',
    description: 'A grid can have dividers between rows',
    model: '      <div class="ui vertically divided grid">\n' +
      '        <div class="two column row">\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="three column row">\n' +
      '          <div class="column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
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
