<template>
  <div>
      <div class="code" data-type="javascript">
        $('.button')
          .popup({
            inline: true
          })
        ;
      </div>
      <div class="code" data-type="html">
        <div class="ui button">Activator</div>
        <div class="ui special popup">
          <div class="header">Custom Header</div>
          <div class="ui button">Click Me</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupUsingaPreexistingPopup1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Usage',
    title2: 'Using a Pre-existing Popup',
    description: '???',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.button\')\n' +
      '          .popup({\n' +
      '            inline: true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui button">Activator</div>\n' +
      '        <div class="ui special popup">\n' +
      '          <div class="header">Custom Header</div>\n' +
      '          <div class="ui button">Click Me</div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
