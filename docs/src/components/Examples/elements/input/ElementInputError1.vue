<template>
  <div>
    <FuiInput placeholder="Search..." error>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputError1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'States',
    title2: 'Error',
    description: 'An input field can show the data contains errors',
    model: '    <div class="ui error input">\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '    </div>\n',
  },
};
</script>
