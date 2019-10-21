<template>
  <div>
    <FuiInput placeholder="Search massive..." size=massive icon>
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize6',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Size',
    description: 'An input can vary in size',
    model: '    <div class="ui massive icon input">\n' +
      '      <input type="text" placeholder="Search massive...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
