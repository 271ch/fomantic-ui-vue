<template>
  <div>
    <FuiHeader level=3 block>
      Block Header
    </FuiHeader>
    <FuiImage wireframe src="/images/wireframe/media-paragraph.png"></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderBlock1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Variations',
    title2: 'Block',
    description: 'A header can be formatted to appear inside a content block',
    model: '    <h3 class="ui block header">\n' +
      '      Block Header\n' +
      '    </h3>\n' +
      '    <img class="ui wireframe image" src="/images/wireframe/media-paragraph.png"/>\n',
  },
};
</script>
