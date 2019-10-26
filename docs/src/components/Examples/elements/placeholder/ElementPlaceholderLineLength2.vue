<template>
  <div>
    <FuiPlaceholder>
      <FuiPHHeader image>
        <FuiPHLine medium></FuiPHLine>
        <FuiPHLine full></FuiPHLine>
      </FuiPHHeader>
      <FuiPHParagraph>
        <FuiPHLine full></FuiPHLine>
        <FuiPHLine medium></FuiPHLine>
      </FuiPHParagraph>
    </FuiPlaceholder>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderLineLength2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'placeholder',
    title1: 'Variations',
    title2: 'Line Length',
    description: 'A line can specify how long its contents should appear',
    model: '    <div class="ui placeholder">\n' +
      '      <div class="image header">\n' +
      '        <div class="medium line"></div>\n' +
      '        <div class="full line"></div>\n' +
      '      </div>\n' +
      '      <div class="paragraph">\n' +
      '        <div class="full line"></div>\n' +
      '        <div class="medium line"></div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
