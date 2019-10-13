<template>
  <div>
    <div class="ui left icon input">
      <input type="text" placeholder="Search users..."/>
      <i class="users icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputIcon2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Icon',
      description: 'An input can be formatted with an icon',
      model: '    <div class="ui left icon input">\n' +
      '      <input type="text" placeholder="Search users..."/>\n' +
      '      <i class="users icon"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
