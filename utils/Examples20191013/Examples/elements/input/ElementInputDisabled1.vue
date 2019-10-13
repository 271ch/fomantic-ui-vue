<template>
  <div>
    <div class="ui disabled input">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputDisabled1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'States',
      title2: 'Disabled',
      description: 'An input field can show that it is disabled',
      model: '    <div class="ui disabled input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '    </div>\n',
    };
  },
};
</script>
