<template>
  <div>
    <FuiSegment inverted>
      <FuiPlaceholder active inverted>
        <FuiPHHeader image>
          <FuiPHLine></FuiPHLine>
          <FuiPHLine></FuiPHLine>
        </FuiPHHeader>
        <FuiPHParagraph>
          <FuiPHLine></FuiPHLine>
          <FuiPHLine></FuiPHLine>
          <FuiPHLine></FuiPHLine>
        </FuiPHParagraph>
      </FuiPlaceholder>
    </FuiSegment>
  </div>
</template>

<script>
export default {
  name: 'ElementPlaceholderInverted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'placeholder',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A placeholder can have their colors inverted.',
    model: '    <div class="ui inverted segment">\n' +
      '      <div class="ui active inverted placeholder">\n' +
      '        <div class="image header">\n' +
      '          <div class="line"></div>\n' +
      '          <div class="line"></div>\n' +
      '        </div>\n' +
      '        <div class="paragraph">\n' +
      '          <div class="line"></div>\n' +
      '          <div class="line"></div>\n' +
      '          <div class="line"></div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
