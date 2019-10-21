<template>
  <div>
    <FuiInput placeholder="Search..." icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputIcon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Icon',
    description: 'An input can be formatted with an icon',
    model: '    <div class="ui icon input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
