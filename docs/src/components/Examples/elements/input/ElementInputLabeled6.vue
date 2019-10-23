<template>
  <div>
    <FuiInput corner=left labeled placeholder="Search...">
      <FuiLabel corner=left>
        <FuiIcon name=asterisk></FuiIcon>
      </FuiLabel>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled6',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui left corner labeled input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <div class="ui left corner label">\n' +
      '        <i class="asterisk icon"></i>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
