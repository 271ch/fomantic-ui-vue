<template>
  <div>
      <FuiGrid>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=four></FuiColumn>
        <FuiColumn wide=two></FuiColumn>
        <FuiColumn wide=eight></FuiColumn>
        <FuiColumn wide=six></FuiColumn>
      </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridColumns1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Introduction',
    title2: 'Columns',
    description: '???',
    model: '      <div class="ui grid">\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="four wide column"></div>\n' +
      '        <div class="two wide column"></div>\n' +
      '        <div class="eight wide column"></div>\n' +
      '        <div class="six wide column"></div>\n' +
      '      </div>\n',
  },
};
</script>
