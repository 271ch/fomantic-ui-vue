<template>
  <div>
    <div class="ui message">
      <i class="close icon"/>
      <div class="header">
        Welcome back!
      </div>
      <p>This is a special notification which you can dismiss if you're bored with it.</p>
    </div>
    <div class="warning ui ignored message">
      <p>Dismissable blocks do not automatically close when using the close icon, this behavior must be defined using Javascript, for example:</p>
      <div class="code">
      $('.message .close')
        .on('click', function() {
          $(this)
            .closest('.message')
            .transition('fade')
          ;
        })
      ;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageDismissableBlock1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'message',
    title1: 'Types',
    title2: 'Dismissable Block',
    description: 'A message that the user can choose to hide',
    model: '    <div class="ui message">\n' +
      '      <i class="close icon"/>\n' +
      '      <div class="header">\n' +
      '        Welcome back!\n' +
      '      </div>\n' +
      '      <p>This is a special notification which you can dismiss if you\'re bored with it.</p>\n' +
      '    </div>\n' +
      '    <div class="warning ui ignored message">\n' +
      '      <p>Dismissable blocks do not automatically close when using the close icon, this behavior must be defined using Javascript, for example:</p>\n' +
      '      <div class="code">\n' +
      '      $(\'.message .close\')\n' +
      '        .on(\'click\', function() {\n' +
      '          $(this)\n' +
      '            .closest(\'.message\')\n' +
      '            .transition(\'fade\')\n' +
      '          ;\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
