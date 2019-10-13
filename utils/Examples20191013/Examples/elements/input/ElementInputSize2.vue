<template>
  <div>
    <div class="ui small icon input">
      <input type="text" placeholder="Search small..."/>
      <i class="search icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputSize2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Size',
      description: 'An input can vary in size',
      model: '    <div class="ui small icon input">\n' +
      '      <input type="text" placeholder="Search small..."/>\n' +
      '      <i class="search icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
