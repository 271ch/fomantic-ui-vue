<template>
  <div>
      <div class="ui ignored info message">
        A checkbox can be disabled by either setting the disabled attribute on the hidden input, or class <code>disabled</code> on the <code>ui checkbox</code>
      </div>
      <div class="ui disabled checkbox">
        <input type="checkbox" disabled="disabled"/>
        <label>Disabled</label>
      </div>
      <br/>
      <br/>
      <div class="ui toggle checkbox">
        <input type="checkbox" disabled="disabled"/>
        <label>Disabled</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxDisabled1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'States',
    title2: 'Disabled',
    description: 'A checkbox can be read-only and unable to change states',
    model: '      <div class="ui ignored info message">\n' +
      '        A checkbox can be disabled by either setting the disabled attribute on the hidden input, or class <code>disabled</code> on the <code>ui checkbox</code>\n' +
      '      </div>\n' +
      '      <div class="ui disabled checkbox">\n' +
      '        <input type="checkbox" disabled="disabled"/>\n' +
      '        <label>Disabled</label>\n' +
      '      </div>\n' +
      '      <br/>\n' +
      '      <br/>\n' +
      '      <div class="ui toggle checkbox">\n' +
      '        <input type="checkbox" disabled="disabled"/>\n' +
      '        <label>Disabled</label>\n' +
      '      </div>\n',
  },
};
</script>
