<template>
  <div>
    <FuiHeader level=3 attached=top>
      Top Attached
    </FuiHeader>
    <FuiSegment attached>
      <FuiImage wireframe src="/images/wireframe/paragraph.png"></FuiImage>
    </FuiSegment>
    <FuiHeader level=3 attached>
      Attached
    </FuiHeader>
    <FuiSegment attached>
      <FuiImage wireframe src="/images/wireframe/paragraph.png"></FuiImage>
    </FuiSegment>
    <FuiHeader level=3 attached=bottom>
      Bottom Attached
    </FuiHeader>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Variations',
    title2: 'Attached',
    description: 'A header can be attached to other content, like a',
    model: '    <h3 class="ui top attached header">\n' +
      '      Top Attached\n' +
      '    </h3>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <h3 class="ui attached header">\n' +
      '      Attached\n' +
      '    </h3>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '    </div>\n' +
      '    <h3 class="ui bottom attached header">\n' +
      '      Bottom Attached\n' +
      '    </h3>\n',
  },
};
</script>
