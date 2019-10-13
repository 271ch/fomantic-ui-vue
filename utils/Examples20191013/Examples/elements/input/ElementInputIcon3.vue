<template>
  <div>
    <div class="ui icon input">
      <input type="text" placeholder="Search..."/>
      <i class="circular search link icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputIcon3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Icon',
      description: 'An input can be formatted with an icon',
      model: '    <div class="ui icon input">\n' +
      '      <input type="text" placeholder="Search..."/>\n' +
      '      <i class="circular search link icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
