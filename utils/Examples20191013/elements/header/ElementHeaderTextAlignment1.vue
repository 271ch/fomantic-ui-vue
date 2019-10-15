<template>
  <div>
    <div class="ui segment">
      <h3 class="ui right aligned header">
        Right
      </h3>
      <h3 class="ui left aligned header">
        Left
      </h3>
      <h3 class="ui justified header">
        This should take up the full width even if only one line
      </h3>
      <h3 class="ui center aligned header">
        Center
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderTextAlignment1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'header',
    title1: 'Variations',
    title2: 'Text Alignment',
    description: 'A header can have its text aligned to a side',
    model: '    <div class="ui segment">\n' +
      '      <h3 class="ui right aligned header">\n' +
      '        Right\n' +
      '      </h3>\n' +
      '      <h3 class="ui left aligned header">\n' +
      '        Left\n' +
      '      </h3>\n' +
      '      <h3 class="ui justified header">\n' +
      '        This should take up the full width even if only one line\n' +
      '      </h3>\n' +
      '      <h3 class="ui center aligned header">\n' +
      '        Center\n' +
      '      </h3>\n' +
      '    </div>\n',
  },
};
</script>
