<template>
  <div>
    <FuiInput placeholder="Search..." transparent icon=left>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTransparent3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Transparent',
    description: 'A transparent input has no background',
    model: '    <div class="ui transparent left icon input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
