<template>
  <div>
    <FuiSegment>
      <FuiRail left>
        <FuiSegment>
          Left Rail Content
        </FuiSegment>
      </FuiRail>
      <FuiRail right>
        <FuiSegment>
          Right Rail Content
        </FuiSegment>
      </FuiRail>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
      <FuiImage src="/images/wireframe/paragraph.png" wireframe></FuiImage>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementRailRail1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'rail',
    title1: 'Types',
    title2: 'Rail',
    description: 'A rail can be presented on the left or right side of a container',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui left rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right rail">\n' +
      '        <div class="ui segment">\n' +
      '          Right Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n',
  },
};
</script>
