<template>
  <div>
    <div class="ui transparent input">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTransparent1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Transparent',
      description: 'A transparent input has no background',
      model: '    <div class="ui transparent input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '    </div>\n',
    };
  },
};
</script>
