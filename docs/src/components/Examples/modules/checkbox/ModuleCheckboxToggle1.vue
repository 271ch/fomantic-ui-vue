<template>
  <div>
      <div class="ui toggle checkbox">
        <input type="checkbox" name="public"/>
        <label>Subscribe to weekly newsletter</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxToggle1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Types',
    title2: 'Toggle',
    description: 'A checkbox can be formatted to show an on or off choice',
    model: '      <div class="ui toggle checkbox">\n' +
      '        <input type="checkbox" name="public"/>\n' +
      '        <label>Subscribe to weekly newsletter</label>\n' +
      '      </div>\n',
  },
};
</script>
