<template>
  <div>
      <div class="ui left floated compact segment">
        <div class="ui fitted checkbox">
          <input type="checkbox"/>
          <label/>
        </div>
      </div>
      <div class="ui left floated compact segment">
        <div class="ui fitted slider checkbox">
          <input type="checkbox"/>
          <label/>
        </div>
      </div>
      <div class="ui left floated compact segment">
        <div class="ui fitted toggle checkbox">
          <input type="checkbox"/>
          <label/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxFitted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Variations',
    title2: 'Fitted',
    description: 'A fitted checkbox does not leave padding for a label',
    model: '      <div class="ui left floated compact segment">\n' +
      '        <div class="ui fitted checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui left floated compact segment">\n' +
      '        <div class="ui fitted slider checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui left floated compact segment">\n' +
      '        <div class="ui fitted toggle checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label/>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
