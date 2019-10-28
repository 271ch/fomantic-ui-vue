<template>
  <div>
    <FuiGrid column=four>
      <FuiRow column=two>
        <FuiColumn></FuiColumn>
      </FuiRow>
      <FuiColumn></FuiColumn>
      <FuiColumn></FuiColumn>
      <FuiColumn></FuiColumn>
      <FuiColumn></FuiColumn>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridGrouping1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Rows',
    title2: 'Grouping',
    description: 'Row wrappers allow you to apply variations to a group of columns.',
    model: '      <div class="ui four column grid">\n' +
      '        <div class="two column row">\n' +
      '          <div class="column"></div>\n' +
      '        </div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '        <div class="column"></div>\n' +
      '      </div>\n',
  },
};
</script>
