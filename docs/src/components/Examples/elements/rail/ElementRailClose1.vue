<template>
  <div>
    <FuiSegment>
      <FuiRail close=left>
        <FuiSegment>
          Left Rail Content
        </FuiSegment>
      </FuiRail>
      <FuiRail close=right>
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
  name: 'ElementRailClose1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'rail',
    title1: 'Variations',
    title2: 'Close',
    description: 'A rail can appear closer to the main viewport',
    model: '    <div class="ui segment">\n' +
      '      <div class="ui left close rail">\n' +
      '        <div class="ui segment">\n' +
      '          Left Rail Content\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui right close rail">\n' +
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
