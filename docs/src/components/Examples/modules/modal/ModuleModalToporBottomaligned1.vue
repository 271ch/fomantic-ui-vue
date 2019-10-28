<template>
  <div>
      <div class="ui ignored info message">
          If <code>bottom aligned</code> is used, you have to make sure that the modal content fits to the screen or uses <code>scrolling content</code>, because scrolling of the whole screen will not be supported to keep the modal to the bottom
      </div>
      <div class="code" data-demo="true">
          $('.bottom.aligned.modal')
          .modal('show')
          ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalToporBottomaligned1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Top or Bottom aligned',
    description: 'If you leave the',
    model: '      <div class="ui ignored info message">\n' +
      '          If <code>bottom aligned</code> is used, you have to make sure that the modal content fits to the screen or uses <code>scrolling content</code>, because scrolling of the whole screen will not be supported to keep the modal to the bottom\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true">\n' +
      '          $(\'.bottom.aligned.modal\')\n' +
      '          .modal(\'show\')\n' +
      '          ;\n' +
      '      </div>\n',
  },
};
</script>
