<template>
  <div>
    <FuiButtons>
      <FuiButton labeledIcon>
        <FuiIcon name="left chevron"></FuiIcon>
        Back
      </FuiButton>
      <FuiButton>
        <FuiIcon name=stop></FuiIcon>
        Stop
      </FuiButton>
      <FuiButton labeledIcon=right>
        Forward
        <FuiIcon name="right chevron"></FuiIcon>
      </FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonMixedGroup1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Mixed Group',
    description: 'Groups can be formatted to use multiple button types together',
    model: '    <div class="ui buttons">\n' +
      '      <button class="ui labeled icon button">\n' +
      '        <i class="left chevron icon"/>\n' +
      '        Back\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="stop icon"/>\n' +
      '        Stop\n' +
      '      </button>\n' +
      '      <button class="ui right labeled icon button">\n' +
      '        Forward\n' +
      '        <i class="right chevron icon"/>\n' +
      '      </button>\n' +
      '    </div>\n',
  },
};
</script>
