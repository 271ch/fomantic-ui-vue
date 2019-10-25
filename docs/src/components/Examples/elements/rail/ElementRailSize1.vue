<template>
  <div>
    <FuiSegment>
      <FuiRail size=mini left>
        Mini
      </FuiRail>
      <FuiRail size=tiny right>
        Tiny
      </FuiRail>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiRail size=small left>
        Small
      </FuiRail>
      <FuiRail size=large right>
        Large
      </FuiRail>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiRail size=big left>
        Big
      </FuiRail>
      <FuiRail size=huge right>
        Huge
      </FuiRail>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
    <FuiSegment>
      <FuiRail right size=massive>
        Massive
      </FuiRail>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementRailSize1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'rail',
    title1: 'Variations',
    title2: 'Size',
    description: 'A rail can have different sizes',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui left mini rail">\n' +
      '        Mini\n' +
      '      </div>\n' +
      '      <div class="ui right tiny rail">\n' +
      '        Tiny\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui left small rail">\n' +
      '        Small\n' +
      '      </div>\n' +
      '      <div class="ui right large rail">\n' +
      '        Large\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui left big rail">\n' +
      '        Big\n' +
      '      </div>\n' +
      '      <div class="ui right huge rail">\n' +
      '        Huge\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div class="ui segment">\n' +
      '      <div class="ui right massive rail">\n' +
      '        Massive\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
