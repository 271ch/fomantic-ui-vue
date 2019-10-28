<template>
  <div>
      <div class="ui compact inverted segment">
        <div class="ui inverted checkbox">
          <input type="checkbox"/>
          <label>Inverted</label>
        </div>
      </div>
      <div class="ui compact inverted segment">
        <div class="ui inverted slider checkbox">
          <input type="checkbox"/>
          <label>Inverted</label>
        </div>
      </div>
      <div class="ui compact inverted segment">
        <div class="ui inverted toggle checkbox">
          <input type="checkbox"/>
          <label>Inverted</label>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCheckboxInverted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'checkbox',
    title1: 'Variations',
    title2: 'Inverted',
    description: 'A inverted checkbox',
    model: '      <div class="ui compact inverted segment">\n' +
      '        <div class="ui inverted checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Inverted</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui compact inverted segment">\n' +
      '        <div class="ui inverted slider checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Inverted</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui compact inverted segment">\n' +
      '        <div class="ui inverted toggle checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Inverted</label>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
