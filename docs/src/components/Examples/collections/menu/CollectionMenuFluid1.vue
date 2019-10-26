<template>
  <div>
    <FuiMenu fluid vertical>
      <FuiItem a>Run</FuiItem>
      <FuiItem a>Walk</FuiItem>
      <FuiItem a>Bike</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFluid1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fluid',
    description: 'A vertical menu may take the size of its container. (A horizontal menu does this by default)',
    model: '    <div class="ui fluid vertical menu">\n' +
      '      <a class="item">Run</a>\n' +
      '      <a class="item">Walk</a>\n' +
      '      <a class="item">Bike</a>\n' +
      '    </div>\n',
  },
};
</script>
