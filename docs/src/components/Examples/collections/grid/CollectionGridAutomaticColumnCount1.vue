<template>
  <div>
      <FuiGrid equalWidth>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiRow equalWidth>
          <FuiColumn></FuiColumn>
          <FuiColumn></FuiColumn>
        </FuiRow>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridAutomaticColumnCount1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Automatic Column Count',
    description: 'The',
    model: '      <div class="ui equal width grid">\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="equal width row">\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
