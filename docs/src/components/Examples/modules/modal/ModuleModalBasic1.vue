<template>
  <div>
      <div class="code" data-demo="true" data-eval="$('.basic.test.modal').modal('show');">
      $('.ui.basic.modal')
        .modal('show')
      ;
      </div>
      <div class="existing code">
        <div class="ui basic modal">
          <div class="ui icon header">
            <i class="archive icon"/>
            Archive Old Messages
          </div>
          <div class="content">
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </div>
          <div class="actions">
            <div class="ui red basic cancel inverted button">
              <i class="remove icon"/>
              No
            </div>
            <div class="ui green ok inverted button">
              <i class="checkmark icon"/>
              Yes
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalBasic1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Types',
    title2: 'Basic',
    description: 'A modal can reduce its complexity',
    model: '      <div class="code" data-demo="true" data-eval="$(\'.basic.test.modal\').modal(\'show\');">\n' +
      '      $(\'.ui.basic.modal\')\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="existing code">\n' +
      '        <div class="ui basic modal">\n' +
      '          <div class="ui icon header">\n' +
      '            <i class="archive icon"/>\n' +
      '            Archive Old Messages\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <div class="ui red basic cancel inverted button">\n' +
      '              <i class="remove icon"/>\n' +
      '              No\n' +
      '            </div>\n' +
      '            <div class="ui green ok inverted button">\n' +
      '              <i class="checkmark icon"/>\n' +
      '              Yes\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
