<template>
  <div>
    <div class="ui large icon input">
      <input type="text" placeholder="Search large..."/>
      <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize3',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Size',
      description: 'An input can vary in size',
      model: '    <div class="ui large icon input">\n' +
      '      <input type="text" placeholder="Search large..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
