<template>
  <div>
    <FuiInput placeholder="Search large..." size=large icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui large icon input">\n' +
      '      <input type="text" placeholder="Search large...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
