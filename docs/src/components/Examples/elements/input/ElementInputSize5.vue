<template>
  <div>
    <FuiInput placeholder="Search huge..." size=huge icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize5',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui huge icon input">\n' +
      '      <input type="text" placeholder="Search huge...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
