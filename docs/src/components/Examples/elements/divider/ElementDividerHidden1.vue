<template>
  <div>
    <FuiHeader level=3>Section One</FuiHeader>
    <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
    <FuiDivider hidden></FuiDivider>
    <FuiHeader level=3>Section Two</FuiHeader>
    <FuiImage wireframe src="/images/wireframe/short-paragraph.png"></FuiImage>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHidden1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'divider',
    title1: 'Variations',
    title2: 'Hidden',
    description: 'A hidden divider divides content without creating a dividing line',
    model: '    <h3 class="ui header">Section One</h3>\n' +
      '    <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n' +
      '    <div class="ui hidden divider"></div>\n' +
      '    <h3 class="ui header">Section Two</h3>\n' +
      '    <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image">\n',
  },
};
</script>
