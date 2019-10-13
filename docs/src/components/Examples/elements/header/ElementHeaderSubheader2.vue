<template>
  <div>
    <h1 class="ui header">
      H1
      <div class="sub header">Sub Header</div>
    </h1>
    <h2 class="ui header">
      H2
      <div class="sub header">Sub Header</div>
    </h2>
    <h3 class="ui header">
      H3
      <div class="sub header">Sub Header</div>
    </h3>
    <h5 class="ui header">
      H5
      <div class="sub header">Sub Header</div>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderSubheader2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Content',
      title2: 'Subheader',
      description: 'Headers may contain subheaders',
      model: '    <h1 class="ui header">\n' +
      '      H1\n' +
      '      <div class="sub header">Sub Header</div>\n' +
      '    </h1>\n' +
      '    <h2 class="ui header">\n' +
      '      H2\n' +
      '      <div class="sub header">Sub Header</div>\n' +
      '    </h2>\n' +
      '    <h3 class="ui header">\n' +
      '      H3\n' +
      '      <div class="sub header">Sub Header</div>\n' +
      '    </h3>\n' +
      '    <h5 class="ui header">\n' +
      '      H5\n' +
      '      <div class="sub header">Sub Header</div>\n' +
      '    </h5>\n',
    };
  },
};
</script>
