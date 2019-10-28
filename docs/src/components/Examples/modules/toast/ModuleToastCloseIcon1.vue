<template>
  <div>
      <div class="code" data-demo="true">
      $('body')
        .toast({
          class: 'info',
          displayTime: 0,
          closeIcon: true,
          message: 'Click on the X to close me'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastCloseIcon1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Examples',
    title2: 'Close Icon',
    description: 'You can force the user to click a close Icon instead of clicking anywhere on the toast to close it',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'body\')\n' +
      '        .toast({\n' +
      '          class: \'info\',\n' +
      '          displayTime: 0,\n' +
      '          closeIcon: true,\n' +
      '          message: \'Click on the X to close me\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
