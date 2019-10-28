<template>
  <div>
      <div class="ui ignored info message">Full screen blurring modals are not performant for current-gen computers at widescreen resolutions with integrated graphics.</div>
      <div class="code" data-demo="true" data-eval="$('.ui.inverted.modal').not('.mini').modal({inverted: true}).modal('show')">
      $('.ui.modal')
        .modal({
          inverted: true
        })
        .modal('show')
      ;
      </div>
      <div class="code" data-demo="true" data-eval="$('.ui.standard.modal').modal({inverted: false, blurring: true}).modal('show')">
      $('.ui.modal')
        .modal({
          blurring: true
        })
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalDimmerVariations1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Dimmer Variations',
    description: 'Modals can specify additional variations like',
    model: '      <div class="ui ignored info message">Full screen blurring modals are not performant for current-gen computers at widescreen resolutions with integrated graphics.</div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.ui.inverted.modal\').not(\'.mini\').modal({inverted: true}).modal(\'show\')">\n' +
      '      $(\'.ui.modal\')\n' +
      '        .modal({\n' +
      '          inverted: true\n' +
      '        })\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-eval="$(\'.ui.standard.modal\').modal({inverted: false, blurring: true}).modal(\'show\')">\n' +
      '      $(\'.ui.modal\')\n' +
      '        .modal({\n' +
      '          blurring: true\n' +
      '        })\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
