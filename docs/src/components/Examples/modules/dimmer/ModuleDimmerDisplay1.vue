<template>
  <div>
      <div class="ignored code">
      // these two are the same
      $('.ui.dimmable')
        .dimmer('show')
      ;
      $('.ui.dimmable .dimmer')
        .dimmer('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDimmerDisplay1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dimmer',
    title1: 'Usage',
    title2: 'Display',
    description: 'You can display a dimmer by either invoking .dimmer(\'show\') on a section or a dimmer itself. If you choose to  dim a dimmable section, a dimmer will automatically be created.',
    model: '      <div class="ignored code">\n' +
      '      // these two are the same\n' +
      '      $(\'.ui.dimmable\')\n' +
      '        .dimmer(\'show\')\n' +
      '      ;\n' +
      '      $(\'.ui.dimmable .dimmer\')\n' +
      '        .dimmer(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
