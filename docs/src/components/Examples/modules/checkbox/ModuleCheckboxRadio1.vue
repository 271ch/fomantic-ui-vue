<template>
  <div>
      <div class="ui radio checkbox">
        <input type="radio" name="radio" checked="checked"/>
        <label>Radio choice</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxRadio1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Types',
    title2: 'Radio',
    description: 'A checkbox can be formatted as a radio element. This means it is an exclusive option.',
    model: '      <div class="ui radio checkbox">\n' +
      '        <input type="radio" name="radio" checked="checked"/>\n' +
      '        <label>Radio choice</label>\n' +
      '      </div>\n',
  },
};
</script>
