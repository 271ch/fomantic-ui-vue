<template>
  <div>
    <button class="compact ui button">
      Hold
    </button>
    <button class="ui compact icon button">
      <i class="pause icon"/>
    </button>
    <button class="ui compact labeled icon button">
      <i class="pause icon"/>
      Pause
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonCompact1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Compact',
    description: 'A button can reduce its padding to fit into tighter spaces',
    model: '    <button class="compact ui button">\n' +
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
