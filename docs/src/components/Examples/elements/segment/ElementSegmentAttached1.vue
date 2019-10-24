<template>
  <div>
    <FuiSegment attached=top>
      <p>This segment is on top</p>
    </FuiSegment>
    <FuiSegment attached>
      <p>This segment is attached on both sides</p>
    </FuiSegment>
    <FuiSegment attached=bottom>
      <p>This segment is on bottom</p>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementSegmentAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'segment',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A segment can be attached to other content on a page',
    model: '    <div class="ui top attached segment">\n' +
      '      <p>This segment is on top</p>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <p>This segment is attached on both sides</p>\n' +
      '    </div>\n' +
      '    <div class="ui bottom attached segment">\n' +
      '      <p>This segment is on bottom</p>\n' +
      '    </div>\n',
  },
};
</script>
