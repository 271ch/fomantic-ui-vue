<template>
  <div>
    <div class="ui transparent left icon input">
      <input type="text" placeholder="Search..."/>
      <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTransparent3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Transparent',
      description: 'A transparent input has no background',
      model: '    <div class="ui transparent left icon input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
