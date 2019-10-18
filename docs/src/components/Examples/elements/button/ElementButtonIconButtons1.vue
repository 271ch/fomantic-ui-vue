<template>
  <div>
    <FuiButtons icon>
      <FuiButton><FuiIcon name="align left"></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name="align center"></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name="align right"></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name="align justify"></FuiIcon></FuiButton>
    </FuiButtons>
    <FuiButtons icon>
      <FuiButton><FuiIcon name=bold></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name=underline></FuiIcon></FuiButton>
      <FuiButton><FuiIcon name="text width"></FuiIcon></FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonIconButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Groups',
    title2: 'Icon Buttons',
    description: 'Button groups can show groups of icons',
    model: '    <div class="ui icon buttons">\n' +
      '      <button class="ui button"><i class="align left icon"/></button>\n' +
      '      <button class="ui button"><i class="align center icon"/></button>\n' +
      '      <button class="ui button"><i class="align right icon"/></button>\n' +
      '      <button class="ui button"><i class="align justify icon"/></button>\n' +
      '    </div>\n' +
      '    <div class="ui icon buttons">\n' +
      '      <button class="ui button"><i class="bold icon"/></button>\n' +
      '      <button class="ui button"><i class="underline icon"/></button>\n' +
      '      <button class="ui button"><i class="text width icon"/></button>\n' +
      '    </div>\n',
  },
};
</script>
