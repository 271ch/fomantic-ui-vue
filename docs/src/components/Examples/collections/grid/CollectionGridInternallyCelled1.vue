<template>
  <div>
    <FuiGrid celled=internally>
      <FuiRow>
        <FuiColumn wide=three>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=ten>
          <FuiImage src="/images/wireframe/centered-paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=three>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn wide=three>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=ten>
          <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
        </FuiColumn>
        <FuiColumn wide=three>
          <FuiImage src="/images/wireframe/image.png" wireframe></FuiImage>
        </FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridInternallyCelled1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Types',
    title2: 'Internally Celled',
    description: 'A grid can have rows divisions only between internal rows',
    model: '      <div class="ui internally celled grid">\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="ten wide column">\n' +
      '            <img src="/images/wireframe/centered-paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="three wide column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="ten wide column">\n' +
      '            <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '          <div class="three wide column">\n' +
      '            <img src="/images/wireframe/image.png" class="ui wireframe image">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
