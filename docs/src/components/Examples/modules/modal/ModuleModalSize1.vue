<template>
  <div>
      <div class="code" data-demo="true" data-eval="$('.mini.test.modal').not('.inverted').not('.basic').modal('show')">
      $('.mini.modal')
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true" data-eval="$('.tiny.test.modal').not('.basic').modal('show')">
      $('.tiny.modal')
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true" data-eval="$('.small.test.modal').not('.basic').modal('show')">
      $('.small.modal')
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true" data-eval="$('.large.test.modal').modal('show')">
      $('.large.modal')
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalSize1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Variations',
    title2: 'Size',
    description: 'A modal can vary in size',
    model: '      <div class="code" data-demo="true" data-eval="$(\'.mini.test.modal\').not(\'.inverted\').not(\'.basic\').modal(\'show\')">\n' +
      '      $(\'.mini.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.tiny.test.modal\').not(\'.basic\').modal(\'show\')">\n' +
      '      $(\'.tiny.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.small.test.modal\').not(\'.basic\').modal(\'show\')">\n' +
      '      $(\'.small.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.large.test.modal\').modal(\'show\')">\n' +
      '      $(\'.large.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
