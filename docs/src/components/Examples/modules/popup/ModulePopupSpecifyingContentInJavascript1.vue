<template>
  <div>
      <div class="code">
      $('.ui.popup')
        .popup({
          title   : 'Popup Title',
          content : 'Hello I am a popup'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModulePopupSpecifyingContentInJavascript1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'popup',
    title1: 'Usage',
    title2: 'Specifying Content In Javascript',
    description: '???',
    model: '      <div class="code">\n' +
      '      $(\'.ui.popup\')\n' +
      '        .popup({\n' +
      '          title   : \'Popup Title\',\n' +
      '          content : \'Hello I am a popup\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
