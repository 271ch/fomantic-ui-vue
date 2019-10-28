<template>
  <div>
    <FuiGrid>
      <FuiRow column=four>
        <FuiColumn floated=left></FuiColumn>
        <FuiColumn floated=right></FuiColumn>
      </FuiRow>
      <FuiRow>
        <FuiColumn wide=three></FuiColumn>
        <FuiColumn wide=eight></FuiColumn>
        <FuiColumn wide=five></FuiColumn>
      </FuiRow>
    </FuiGrid>
  </div>
</template>

<script>
export default {
  name: 'CollectionGridClearingContent1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'grid',
    title1: 'Rows',
    title2: 'Clearing Content',
    description: 'Row wrappers will automatically clear previous columns, making them useful when using',
    model: '      <div class="ui grid">\n' +
      '        <div class="four column row">\n' +
      '          <div class="left floated column"></div>\n' +
      '          <div class="right floated column"></div>\n' +
      '        </div>\n' +
      '        <div class="row">\n' +
      '          <div class="three wide column"></div>\n' +
      '          <div class="eight wide column"></div>\n' +
      '          <div class="five wide column"></div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
