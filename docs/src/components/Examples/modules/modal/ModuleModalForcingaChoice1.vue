<template>
  <div>
      <div class="code" data-demo="true">
      $('.basic.test.modal')
        .modal('setting', 'closable', false)
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalForcingaChoice1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Forcing a Choice',
    description: 'You can disable a modal\'s dimmer from being closed by click to force a user to make a choice',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'.basic.test.modal\')\n' +
      '        .modal(\'setting\', \'closable\', false)\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
