<template>
  <div>
      <div class="code" data-demo="true">
      // initialize all modals
      $('.coupled.modal')
        .modal({
          allowMultiple: true
        })
      ;
      // open second modal on first modal buttons
      $('.second.modal')
        .modal('attach events', '.first.modal .button')
      ;
      // show first immediately
      $('.first.modal')
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true">
      $('.coupled.modal')
        .modal({
          allowMultiple: false
        })
      ;
      // attach events to buttons
      $('.second.modal')
        .modal('attach events', '.first.modal .button')
      ;
      // show first now
      $('.first.modal')
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalMultipleModals1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Multiple Modals',
    description: 'A modal can open a second modal. If you use',
    model: '      <div class="code" data-demo="true">\n' +
      '      // initialize all modals\n' +
      '      $(\'.coupled.modal\')\n' +
      '        .modal({\n' +
      '          allowMultiple: true\n' +
      '        })\n' +
      '      ;\n' +
      '      // open second modal on first modal buttons\n' +
      '      $(\'.second.modal\')\n' +
      '        .modal(\'attach events\', \'.first.modal .button\')\n' +
      '      ;\n' +
      '      // show first immediately\n' +
      '      $(\'.first.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true">\n' +
      '      $(\'.coupled.modal\')\n' +
      '        .modal({\n' +
      '          allowMultiple: false\n' +
      '        })\n' +
      '      ;\n' +
      '      // attach events to buttons\n' +
      '      $(\'.second.modal\')\n' +
      '        .modal(\'attach events\', \'.first.modal .button\')\n' +
      '      ;\n' +
      '      // show first now\n' +
      '      $(\'.first.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
