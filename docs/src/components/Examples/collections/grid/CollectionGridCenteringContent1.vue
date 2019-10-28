<template>
  <div>
      <FuiGrid column=two centered>
        <FuiColumn></FuiColumn>
        <FuiRow column=four centered>
          <FuiColumn></FuiColumn>
          <FuiColumn></FuiColumn>
        </FuiRow>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridCenteringContent1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Centering Content',
    description: 'If a row does not take up all sixteen grid columns, you can use a',
    model: '      <div class="ui two column centered grid">\n' +
      '        <div class="column"></div>\n' +
      '        <div class="four column centered row">\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
