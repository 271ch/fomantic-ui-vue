<template>
  <div>
      <div class="ui ignored info message">
          Overlay fullscreen modals cannot be closed by clicking into the dimmer, because the dimmer is completely overlayed and not visible anymore).
          Make sure your modal is closable by either adding a close icon or an action button to close it.
      </div>
      <div class="code" data-demo="true">
      $('.overlay.fullscreen.modal')
      .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalOverlayFullScreen1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Variations',
    title2: 'Overlay Full Screen',
    description: 'A modal can overlay the entire screen',
    model: '      <div class="ui ignored info message">\n' +
      '          Overlay fullscreen modals cannot be closed by clicking into the dimmer, because the dimmer is completely overlayed and not visible anymore).\n' +
      '          Make sure your modal is closable by either adding a close icon or an action button to close it.\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true">\n' +
      '      $(\'.overlay.fullscreen.modal\')\n' +
      '      .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
