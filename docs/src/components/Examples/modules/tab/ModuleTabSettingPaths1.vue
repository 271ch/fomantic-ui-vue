<template>
  <div>
      <div class="code">
      $('.ui.menu .item')
        .tab({
          history: true,
          historyType: 'state'
          path: '/modules/tab.html'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabSettingPaths1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Managing State',
    title2: 'Setting Paths',
    description: '???',
    model: '      <div class="code">\n' +
      '      $(\'.ui.menu .item\')\n' +
      '        .tab({\n' +
      '          history: true,\n' +
      '          historyType: \'state\'\n' +
      '          path: \'/modules/tab.html\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
