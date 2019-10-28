<template>
  <div>
      <div class="code" data-demo="true">
      $('.test.modal')
        .modal('attach events', '.test.button', 'show')
      ;
      </div>
      <div class="ui primary test button">Launch modal</div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalAttachevents1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Attach events',
    description: 'A modal can attach events to another element',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'.test.modal\')\n' +
      '        .modal(\'attach events\', \'.test.button\', \'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui primary test button">Launch modal</div>\n',
  },
};
</script>
