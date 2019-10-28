<template>
  <div>
      <div class="ui checked checkbox">
        <input type="checkbox" checked="checked"/>
        <label>Active</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxChecked1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'States',
    title2: 'Checked',
    description: 'A checkbox can be checked',
    model: '      <div class="ui checked checkbox">\n' +
      '        <input type="checkbox" checked="checked"/>\n' +
      '        <label>Active</label>\n' +
      '      </div>\n',
  },
};
</script>
