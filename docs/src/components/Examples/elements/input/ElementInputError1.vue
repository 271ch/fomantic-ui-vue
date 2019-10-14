<template>
  <div>
    <div class="ui input error">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputError1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'States',
    title2: 'Error',
    description: 'An input field can show the data contains errors',
    model: '    <div class="ui input error">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '    </div>\n',
  },
};
</script>
