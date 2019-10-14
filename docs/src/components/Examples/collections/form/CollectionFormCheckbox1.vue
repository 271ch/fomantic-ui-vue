<template>
  <div>
    <div class="ui ignored info message">
      UI checkbox are special, styled versions of standard HTML checkboxes.
    </div>
    <div class="evaluated code" data-type="javascript" data-label="true">
    $('.ui.checkbox')
      .checkbox()
    ;
    </div>
    <div class="ui form">
      <div class="inline field">
        <div class="ui checkbox">
          <input type="checkbox"/>
          <label>Checkbox</label>
        </div>
      </div>
      <div class="inline field">
        <div class="ui slider checkbox">
          <input type="checkbox"/>
          <label>Slider</label>
        </div>
        <label/>
      </div>
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox"/>
          <label>Toggle</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormCheckbox1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'form',
    title1: 'Content',
    title2: 'Checkbox',
    description: 'A form can contain a',
    model: '    <div class="ui ignored info message">\n' +
      '      UI checkbox are special, styled versions of standard HTML checkboxes.\n' +
      '    </div>\n' +
      '    <div class="evaluated code" data-type="javascript" data-label="true">\n' +
      '    $(\'.ui.checkbox\')\n' +
      '      .checkbox()\n' +
      '    ;\n' +
      '    </div>\n' +
      '    <div class="ui form">\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Checkbox</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui slider checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Slider</label>\n' +
      '        </div>\n' +
      '        <label/>\n' +
      '      </div>\n' +
      '      <div class="inline field">\n' +
      '        <div class="ui toggle checkbox">\n' +
      '          <input type="checkbox"/>\n' +
      '          <label>Toggle</label>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
