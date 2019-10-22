<template>
  <div>
    <FuiSegment aligned=center basic>
      <FuiInput icon=left action placeholder="Order #">
        <template #before>
          <FuiIcon name=search></FuiIcon>
        </template>
        <FuiButton tag=div color=blue submit>Search</FuiButton>
      </FuiInput>
      <FuiDivider horizontal>
        Or
      </FuiDivider>
      <FuiButton tag=div color=teal labeledIcon>
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
    converted: true,
    elementType: 'elements',
    element: 'divider',
    title1: 'Types',
    title2: 'Horizontal Divider',
    description: 'A divider can segment content horizontally',
    model: '    <div class="ui center aligned basic segment">\n' +
      '      <div class="ui action left icon input">\n' +
      '        <i class="search icon"></i>\n' +
      '        <input type="text" placeholder="Order #" >\n' +
      '        <div class="ui blue submit button">Search</div>\n' +
      '      </div>\n' +
      '      <div class="ui horizontal divider">\n' +
      '        Or\n' +
      '      </div>\n' +
      '      <div class="ui teal labeled icon button">\n' +
      '        Create New Order\n' +
      '        <i class="add icon"></i>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
