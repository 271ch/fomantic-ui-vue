<template>
  <div>
      <div class="code" data-demo="true" data-eval="$('.fullscreen.modal').not('.overlay').modal('show')">
      $('.fullscreen.modal')
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalFullScreen1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Variations',
    title2: 'Full Screen',
    description: 'A modal can use the entire size of the screen',
    model: '      <div class="code" data-demo="true" data-eval="$(\'.fullscreen.modal\').not(\'.overlay\').modal(\'show\')">\n' +
      '      $(\'.fullscreen.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
