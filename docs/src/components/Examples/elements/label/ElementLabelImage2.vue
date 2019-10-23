<template>
  <div>
    <FuiLabel tag=a color=blue image="/images/avatar/small/veronika.jpg" detail="Friend">
      Veronika
    </FuiLabel>
    <FuiLabel tag=a color=teal image="/images/avatar/small/jenny.jpg" detail="Student">
      Veronika
    </FuiLabel>
    <FuiLabel tag=a color=yellow image="/images/avatar/small/christian.jpg" detail="Co-worker">
      Helen
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelImage2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Types',
    title2: 'Image',
    description: 'A label can be formatted to emphasize an image',
    model: '    <a class="ui blue image label">\n' +
      '      <img src="/images/avatar/small/veronika.jpg">\n' +
      '      Veronika\n' +
      '      <div class="detail">Friend</div>\n' +
      '    </a>\n' +
      '    <a class="ui teal image label">\n' +
      '      <img src="/images/avatar/small/jenny.jpg">\n' +
      '      Veronika\n' +
      '      <div class="detail">Student</div>\n' +
      '    </a>\n' +
      '    <a class="ui yellow image label">\n' +
      '      <img src="/images/avatar/small/christian.jpg">\n' +
      '      Helen\n' +
      '      <div class="detail">Co-worker</div>\n' +
      '    </a>\n',
  },
};
</script>
