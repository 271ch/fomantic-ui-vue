<template>
  <div>
    <FuiGrid column=two>
      <FuiColumn>
        <FuiGrid column=three>
          <FuiColumn></FuiColumn>
          <FuiColumn></FuiColumn>
          <FuiColumn></FuiColumn>
        </FuiGrid>
      </FuiColumn>
      <FuiColumn></FuiColumn>
      <FuiColumn></FuiColumn>
      <FuiColumn>
        <FuiGrid>
          <FuiColumn wide=ten></FuiColumn>
          <FuiColumn wide=six></FuiColumn>
        </FuiGrid>
      </FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridNestingGrids1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Varying Grids',
    title2: 'Nesting Grids',
    description: 'Grids can be placed inside of other grids, letting you sub-divide columns.',
    model: '      <div class="ui two column grid">\n' +
      '        <div class="column">\n' +
      '          <div class="ui three column grid">\n' +
      '            <div class="column"></div>\n' +
      '            <div class="column"></div>\n' +
      '            <div class="column"></div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column">\n' +
      '          <div class="ui grid">\n' +
      '            <div class="ten wide column"></div>\n' +
      '            <div class="six wide column"></div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
