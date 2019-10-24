<template>
  <div>
    <FuiSegment clearing>
      <FuiButton tag=div floated=right>Floated</FuiButton>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentClearing1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Clearing',
    description: 'A segment can clear floated content',
    model: '    <div class="ui clearing segment">\n' +
      '      <div class="ui right floated button">Floated</div>\n' +
      '    </div>\n',
  },
};
</script>
