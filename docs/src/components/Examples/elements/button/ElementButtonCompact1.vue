<template>
  <div>
    <FuiButton compact>
      Hold
    </FuiButton>
    <FuiButton compact icon>
      <FuiIcon name=pause></FuiIcon>
    </FuiButton>
    <FuiButton compact labeledIcon>
      <FuiIcon name=pause></FuiIcon>
      Pause
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonCompact1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Compact',
    description: 'A button can reduce its padding to fit into tighter spaces',
    model: '    <button class="ui compact button">\n' +
      '      Hold\n' +
      '    </button>\n' +
      '    <button class="ui compact icon button">\n' +
      '      <i class="pause icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui compact labeled icon button">\n' +
      '      <i class="pause icon"/>\n' +
      '      Pause\n' +
      '    </button>\n',
  },
};
</script>
