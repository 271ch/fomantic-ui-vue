<template>
  <div>
    <FuiInput action value="http://ww.short.url/c0opq">
      <FuiButton color=teal labeledIcon=right>
        <FuiIcon name=copy></FuiIcon>
        Copy
      </FuiButton>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction5',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui action input">\n' +
      '      <input type="text" value="http://ww.short.url/c0opq">\n' +
      '      <button class="ui teal right labeled icon button">\n' +
      '        <i class="copy icon"></i>\n' +
      '        Copy\n' +
      '      </button>\n' +
      '    </div>\n',
  },
};
</script>
