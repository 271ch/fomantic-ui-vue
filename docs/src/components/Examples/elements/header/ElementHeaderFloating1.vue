<template>
  <div>
    <FuiSegment clearing>
      <FuiHeader level=3 floated=right>
        Go Forward
      </FuiHeader>
      <FuiHeader level=3 floated=left>
        Go Back
      </FuiHeader>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderFloating1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'header',
    title1: 'Variations',
    title2: 'Floating',
    description: 'A header can sit to the left or right of other content',
    model: '    <div class="ui clearing segment">\n' +
      '      <h3 class="ui right floated header">\n' +
      '        Go Forward\n' +
      '      </h3>\n' +
      '      <h3 class="ui left floated header">\n' +
      '        Go Back\n' +
      '      </h3>\n' +
      '    </div>\n',
  },
};
</script>
