<template>
  <div>
    <FuiButton tag=div attached=top>Button before grid</FuiButton>
    <FuiGrid>
      <FuiColumn wide=sixteen></FuiColumn>
      <FuiColumn wide=ten></FuiColumn>
      <FuiColumn wide=six></FuiColumn>
    </FuiGrid>
    <FuiGrid>
      <FuiColumn wide=sixteen></FuiColumn>
    </FuiGrid>
    <FuiButton tag=div attached=bottom>Button after grid</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridNegativeMargins1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Introduction',
    title2: 'Negative Margins',
    description: '???',
    model: '       <div class="ui top attached button">Button before grid</div>\n' +
      '       <div class="ui grid">\n' +
      '        <div class="sixteen wide column"></div>\n' +
      '        <div class="ten wide column"></div>\n' +
      '        <div class="six wide column"></div>\n' +
      '      </div>\n' +
      '      <div class="ui grid">\n' +
      '        <div class="sixteen wide column"></div>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached button">Button after grid</div>\n',
  },
};
</script>
