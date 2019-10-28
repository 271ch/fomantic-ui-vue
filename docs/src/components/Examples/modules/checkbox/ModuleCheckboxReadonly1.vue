<template>
  <div>
      <div class="ui read-only checkbox">
        <input type="checkbox"/>
        <label>Read Only</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxReadonly1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'States',
    title2: 'Read-only',
    description: 'A checkbox can be read-only and unable to change states',
    model: '      <div class="ui read-only checkbox">\n' +
      '        <input type="checkbox"/>\n' +
      '        <label>Read Only</label>\n' +
      '      </div>\n',
  },
};
</script>
