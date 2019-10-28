<template>
  <div>
      <div class="code" data-demo="true" data-eval="$('.mini.test.inverted.modal').not('.basic').modal({inverted:true}).modal('show')">
      $('.mini.inverted.modal')
        .modal({
           inverted: true
        })
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true" data-eval="$('.mini.test.inverted.modal').not('.basic').modal({inverted: false}).modal('show')">
      $('.mini.inverted.modal')
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalInverted1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Variations',
    title2: 'Inverted',
    description: '???',
    model: '      <div class="code" data-demo="true" data-eval="$(\'.mini.test.inverted.modal\').not(\'.basic\').modal({inverted:true}).modal(\'show\')">\n' +
      '      $(\'.mini.inverted.modal\')\n' +
      '        .modal({\n' +
      '           inverted: true\n' +
      '        })\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.mini.test.inverted.modal\').not(\'.basic\').modal({inverted: false}).modal(\'show\')">\n' +
      '      $(\'.mini.inverted.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
