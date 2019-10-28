<template>
  <div>
      <FuiGrid>
        <FuiColumn wide=eight></FuiColumn>
        <FuiColumn wide=eight></FuiColumn>
        <FuiColumn wide=ten></FuiColumn>
        <FuiColumn wide=six></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=twelve></FuiColumn>
        <FuiColumn wide=two></FuiColumn>
        <FuiColumn wide=fourteen></FuiColumn>
        <FuiColumn wide=sixteen></FuiColumn>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumnWidths1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Columns',
    title2: 'Column Widths',
    description: 'Column widths can be specified using',
    model: '      <div class="ui grid">\n' +
      '        <div class="eight wide column"></div>\n' +
      '        <div class="eight wide column"></div>\n' +
      '        <div class="ten wide column"></div>\n' +
      '        <div class="six wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="twelve wide column"></div>\n' +
      '        <div class="two wide column"></div>\n' +
      '        <div class="fourteen wide column"></div>\n' +
      '        <div class="sixteen wide column"></div>\n' +
      '      </div>\n',
  },
};
</script>
