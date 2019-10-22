<template>
  <div>
    <FuiHeader level=2 aligned=center icon>
      <FuiIcon circular name=users></FuiIcon>
      Friends
    </FuiHeader>
    <FuiImage wireframe centered src="/images/wireframe/centered-paragraph.png"></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderIconHeaders2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Types',
    title2: 'Icon Headers',
    description: 'A header can be formatted to emphasize an icon',
    model: '    <h2 class="ui icon center aligned header">\n' +
      '      <i class="circular users icon"></i>\n' +
      '      Friends\n' +
      '    </h2>\n' +
      '    <img src="/images/wireframe/centered-paragraph.png" class="ui wireframe centered image">\n',
  },
};
</script>
