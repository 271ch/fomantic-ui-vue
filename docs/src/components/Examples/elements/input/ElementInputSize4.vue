<template>
  <div>
    <FuiInput placeholder="Search big..." size=big icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui big icon input">\n' +
      '      <input type="text" placeholder="Search big...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
