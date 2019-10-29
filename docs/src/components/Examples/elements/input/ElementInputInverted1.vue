<template>
  <div>
    <FuiSegment inverted>
      <FuiInput inverted placeholder="Search..."></FuiInput>
      <FuiDivider inverted></FuiDivider>
      <FuiInput inverted icon=left placeholder="Search...">
        <FuiIcon name=search></FuiIcon>
      </FuiInput>
      <FuiDivider inverted></FuiDivider>
      <FuiInput inverted transparent icon placeholder="Search...">
        <FuiIcon name=search></FuiIcon>
      </FuiInput>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementInputInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'An input can be formatted to appear on dark backgrounds',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted input">\n' +
      '        <input type="text" placeholder="Search...">\n' +
      '      </div>\n' +
      '      <div class="ui inverted divider"></div>\n' +
      '      <div class="ui inverted left icon input">\n' +
      '        <input type="text" placeholder="Search...">\n' +
      '        <i class="search icon"></i>\n' +
      '      </div>\n' +
      '      <div class="ui inverted divider"></div>\n' +
      '      <div class="ui inverted transparent icon input">\n' +
      '        <input type="text" placeholder="Search...">\n' +
      '        <i class="search icon"></i>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
