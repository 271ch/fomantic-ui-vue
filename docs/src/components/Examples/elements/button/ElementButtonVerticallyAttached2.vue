<template>
  <div>
    <FuiButtons equalWidth=two attached=top>
        <FuiButton tag=div>One</FuiButton>
        <FuiButton tag=div>Two</FuiButton>
    </FuiButtons>
    <FuiSegment attached>
      <FuiImage wireframe src="/images/wireframe/paragraph.png"></FuiImage>
    </FuiSegment>
    <FuiButtons equalWidth=two attached=bottom>
      <FuiButton tag=div>One</FuiButton>
      <FuiButton tag=div>Two</FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonVerticallyAttached2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Vertically Attached',
    description: 'A button can be attached to the top or bottom of other content',
    model: '    <div class="ui two top attached buttons">\n' +
      '        <div class="ui button">One</div>\n' +
      '        <div class="ui button">Two</div>\n' +
      '    </div>\n' +
      '    <div class="ui attached segment">\n' +
      '      <img src="/images/wireframe/paragraph.png" class="ui wireframe image"/>\n' +
      '    </div>\n' +
      '    <div class="ui two bottom attached buttons">\n' +
      '        <div class="ui button">One</div>\n' +
      '        <div class="ui button">Two</div>\n' +
      '    </div>\n',
  },
};
</script>
