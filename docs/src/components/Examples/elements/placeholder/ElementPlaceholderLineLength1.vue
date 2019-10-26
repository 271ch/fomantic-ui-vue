<template>
  <div>
    <FuiPlaceholder>
      <FuiPHLine full></FuiPHLine>
      <FuiPHLine very long></FuiPHLine>
      <FuiPHLine long></FuiPHLine>
      <FuiPHLine medium></FuiPHLine>
      <FuiPHLine short></FuiPHLine>
      <FuiPHLine very short></FuiPHLine>
    </FuiPlaceholder>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderLineLength1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'placeholder',
    title1: 'Variations',
    title2: 'Line Length',
    description: 'A line can specify how long its contents should appear',
    model: '    <div class="ui placeholder">\n' +
      '      <div class="full line"></div>\n' +
      '      <div class="very long line"></div>\n' +
      '      <div class="long line"></div>\n' +
      '      <div class="medium line"></div>\n' +
      '      <div class="short line"></div>\n' +
      '      <div class="very short line"></div>\n' +
      '    </div>\n',
  },
};
</script>
