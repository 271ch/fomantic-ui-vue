<template>
  <div>
    <FuiHeader level=2>
      <FuiImage src="/images/avatar2/large/patrick.png" circular></FuiImage>
      Patrick
    </FuiHeader>
    <FuiImage src="/images/wireframe/short-paragraph.png" wireframe></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderImage2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Content',
    title2: 'Image',
    description: 'A header may contain an',
    model: '    <h2 class="ui header">\n' +
      '      <img src="/images/avatar2/large/patrick.png" class="ui circular image">\n' +
      '      Patrick\n' +
      '    </h2>\n' +
      '    <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n',
  },
};
</script>
