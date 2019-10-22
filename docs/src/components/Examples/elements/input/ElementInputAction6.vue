<template>
  <div>
    <FuiInput action placeholder="Search...">
      <FuiButton icon>
        <FuiIcon name=search></FuiIcon>
      </FuiButton>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction6',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui action input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '      <button class="ui icon button">\n' +
      '        <i class="search icon"></i>\n' +
      '      </button>\n' +
      '    </div>\n',
  },
};
</script>
