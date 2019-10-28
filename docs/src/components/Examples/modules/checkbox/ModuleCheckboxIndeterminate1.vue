<template>
  <div>
      <div class="ui ignored info message">
        An indeterminate state can only be set in Javascript, see examples section
      </div>
      <div class="ui checkbox">
        <input type="checkbox"/>
        <label>Indeterminate</label>
      </div>
      <br/>
      <br/>
      <div class="ui toggle checkbox">
        <input type="checkbox"/>
        <label>Indeterminate</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxIndeterminate1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'States',
    title2: 'Indeterminate',
    description: 'A checkbox can be indeterminate',
    model: '      <div class="ui ignored info message">\n' +
      '        An indeterminate state can only be set in Javascript, see examples section\n' +
      '      </div>\n' +
      '      <div class="ui checkbox">\n' +
      '        <input type="checkbox"/>\n' +
      '        <label>Indeterminate</label>\n' +
      '      </div>\n' +
      '      <br/>\n' +
      '      <br/>\n' +
      '      <div class="ui toggle checkbox">\n' +
      '        <input type="checkbox"/>\n' +
      '        <label>Indeterminate</label>\n' +
      '      </div>\n',
  },
};
</script>
