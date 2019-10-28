<template>
  <div>
      <div class="code" data-type="html" data-variation="scrolling">
        <div class="ui modal">
          <div class="header">Header</div>
          <div class="scrolling content">
            <p>Very long content goes here</p>
          </div>
        </div>
      </div>
      <div class="code" data-demo="true">
      $('.ui.longer.modal')
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalScrollingContent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Variations',
    title2: 'Scrolling Content',
    description: 'A modal can use the entire size of the screen',
    model: '      <div class="code" data-type="html" data-variation="scrolling">\n' +
      '        <div class="ui modal">\n' +
      '          <div class="header">Header</div>\n' +
      '          <div class="scrolling content">\n' +
      '            <p>Very long content goes here</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true">\n' +
      '      $(\'.ui.longer.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
