<template>
  <div>
    <FuiHeader level=1>
      H1
      <FuiSubheader>Sub Header</FuiSubheader>
    </FuiHeader>
    <FuiHeader level=2>
      H2
      <FuiSubheader>Sub Header</FuiSubheader>
    </FuiHeader>
    <FuiHeader level=3>
      H3
      <FuiSubheader>Sub Header</FuiSubheader>
    </FuiHeader>
    <FuiHeader level=5>
      H5
      <FuiSubheader>Sub Header</FuiSubheader>
    </FuiHeader>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderSubheader2',
  info: {
    converted: true,
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
  },
};
</script>
