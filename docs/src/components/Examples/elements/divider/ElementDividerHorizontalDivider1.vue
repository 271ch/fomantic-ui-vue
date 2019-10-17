<template>
  <div>
    <FuiSegment aligned=center basic>
      <div class="ui left icon action input">
        <FuiIcon name=search></FuiIcon>
        <input type="text" placeholder="Order #"/>
        <FuiButton color=blue submit>Search</FuiButton>
      </div>
      <FuiDivider horizontal>
        Or
      </FuiDivider>
      <FuiButton color=teal labeledIcon>
        Create New Order
        <FuiIcon name=add></FuiIcon>
      </FuiButton>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementDividerHorizontalDivider1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Horizontal Divider',
    description: 'A divider can segment content horizontally',
    model: '    <div class="ui center aligned basic segment">\n' +
      '      <div class="ui left icon action input">\n' +
      '        <i class="search icon"/>\n' +
      '        <input type="text" placeholder="Order #"/>\n' +
      '        <div class="ui blue submit button">Search</div>\n' +
      '      </div>\n' +
      '      <div class="ui horizontal divider">\n' +
      '        Or\n' +
      '      </div>\n' +
      '      <div class="ui teal labeled icon button">\n' +
      '        Create New Order\n' +
      '        <i class="add icon"/>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
