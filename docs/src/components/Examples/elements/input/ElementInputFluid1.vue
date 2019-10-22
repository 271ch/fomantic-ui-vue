<template>
  <div>
    <FuiInput fluid icon placeholder="Search a very wide input...">
      <FuiIcon name=search></FuiIcon>
    </FuiInput>
    <FuiDivider ignored></FuiDivider>
    <FuiInput fluid action placeholder="Search...">
      <FuiButton tag=div>Search</FuiButton>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputFluid1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'An input can take the size of its container',
    model: '    <div class="ui fluid icon input">\n' +
      '      <input type="text" placeholder="Search a very wide input...">\n' +
      '      <i class="search icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui ignored divider"></div>\n' +
      '    <div class="ui fluid action input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <div class="ui button">Search</div>\n' +
      '    </div>\n',
  },
};
</script>
