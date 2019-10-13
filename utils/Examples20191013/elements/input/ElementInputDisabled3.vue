<template>
  <div>
    <div class="ui input">
      <input type="text" placeholder="Search..." disabled="disabled"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputDisabled3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'States',
      title2: 'Disabled',
      description: 'An input field can show that it is disabled',
      model: '    <div class="ui input">\n' +
      '      <input type="text" placeholder="Search..." disabled="disabled"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
