<template>
  <div>
    <FuiInput placeholder="Search mini..." size=mini icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui mini icon input">\n' +
      '      <input type="text" placeholder="Search mini...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
