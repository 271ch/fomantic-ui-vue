<template>
  <div>
    <FuiInput corner labeled placeholder="Search...">
      <FuiLabel corner>
        <FuiIcon name=asterisk></FuiIcon>
      </FuiLabel>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled7',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui corner labeled input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <div class="ui corner label">\n' +
      '        <i class="asterisk icon"></i>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
