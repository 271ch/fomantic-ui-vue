<template>
  <div>
    <FuiGrid>
      <FuiRow doubling column=eight>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
      </FuiRow>
      <FuiRow doubling column=six>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
      </FuiRow>
      <FuiRow doubling column=four>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
        <FuiColumn></FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridDoubling1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Grids',
    title2: 'Doubling',
    description: 'A',
    model: '      <div class="ui grid">\n' +
      '        <div class="doubling eight column row">\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '        <div class="doubling six column row">\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '        <div class="doubling four column row">\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
