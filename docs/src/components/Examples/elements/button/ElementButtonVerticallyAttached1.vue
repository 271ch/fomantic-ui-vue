<template>
  <div>
    <FuiButton tag=div attached=top focusable>Top</FuiButton>
    <FuiSegment attached>
      <FuiImage wireframe src="/images/wireframe/paragraph.png"></FuiImage>
    </FuiSegment>
    <FuiButton tag=div attached=bottom focusable>Bottom</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonVerticallyAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Vertically Attached',
    description: 'A button can be attached to the top or bottom of other content',
    model: '    <div tabindex="0" class="ui top attached button">Top</div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <div tabindex="0" class="ui bottom attached button">Bottom</div>\n',
  },
};
</script>
