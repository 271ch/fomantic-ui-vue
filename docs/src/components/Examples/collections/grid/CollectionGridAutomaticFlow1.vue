<template>
  <div>
      <FuiGrid>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridAutomaticFlow1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Columns',
    title2: 'Automatic Flow',
    description: 'Most grids do not need to specify rows. Content will automatically flow to the next row when all the grid columns are taken in the current row.',
    model: '      <div class="ui grid">\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '      </div>\n',
  },
};
</script>
