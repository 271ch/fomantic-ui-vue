<template>
  <div>
    <FuiGrid centered>
      <FuiRow only=computer>
        <FuiColumn></FuiColumn>
      </FuiRow>
      <FuiColumn tablet=six computer=eight></FuiColumn>
      <FuiColumn tablet=six computer=eight></FuiColumn>
      <FuiColumn tablet=six computer=eight></FuiColumn>
      <FuiColumn tablet=six computer=eight></FuiColumn>
      <FuiColumn tablet=six computer=eight></FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridManualTweaks1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Responsive Grids',
    title2: 'Manual Tweaks',
    description: 'Although design patterns like',
    model: '      <div class="ui centered grid">\n' +
      '        <div class="computer only row">\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '        <div class="six wide tablet eight wide computer column"></div>\n' +
      '        <div class="six wide tablet eight wide computer column"></div>\n' +
      '        <div class="six wide tablet eight wide computer column"></div>\n' +
      '        <div class="six wide tablet eight wide computer column"></div>\n' +
      '        <div class="six wide tablet eight wide computer column"></div>\n' +
      '      </div>\n',
  },
};
</script>
