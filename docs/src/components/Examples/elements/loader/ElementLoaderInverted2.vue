<template>
  <div>
    <FuiSegment>
      <FuiDimmer active inverted>
        <FuiLoader size=mini text>Loading</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiDimmer active inverted>
        <FuiLoader size=small text>Loading</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiDimmer active inverted>
        <FuiLoader size=medium text>Loading</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiDimmer active inverted>
        <FuiLoader size=large text>Loading</FuiLoader>
      </FuiDimmer>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementLoaderInverted2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'loader',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'Loaders can have their colors inverted.',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui active inverted dimmer">\n' +
      '        <div class="ui mini text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui active inverted dimmer">\n' +
      '        <div class="ui small text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui active inverted dimmer">\n' +
      '        <div class="ui medium text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui active inverted dimmer">\n' +
      '        <div class="ui large text loader">Loading</div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
