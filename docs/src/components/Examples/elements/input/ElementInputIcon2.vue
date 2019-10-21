<template>
  <div>
    <FuiInput placeholder="Search users..." icon=left>
      <FuiIcon name=users></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputIcon2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Icon',
    description: 'An input can be formatted with an icon',
    model: '    <div class="ui left icon input">\n' +
      '      <input type="text" placeholder="Search users...">\n' +
      '      <i class="users icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
