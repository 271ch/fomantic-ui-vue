<template>
  <div>
    <FuiButton labeledIcon>
      <FuiIcon name=pause></FuiIcon>
      Pause
    </FuiButton>
    <FuiButton labeledIcon=right>
      <FuiIcon name="right arrow"></FuiIcon>
      Next
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonLabeledIcon1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Labeled Icon',
    description: 'A button can use an icon as a label',
    model: '    <button class="ui labeled icon button">\n' +
      '      <i class="pause icon"/>\n' +
      '      Pause\n' +
      '    </button>\n' +
      '    <button class="ui right labeled icon button">\n' +
      '      <i class="right arrow icon"/>\n' +
      '      Next\n' +
      '    </button>\n',
  },
};
</script>
