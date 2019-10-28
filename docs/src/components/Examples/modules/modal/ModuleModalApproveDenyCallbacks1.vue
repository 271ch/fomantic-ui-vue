<template>
  <div>
      <div class="ui ignored info message">
        If <code>onDeny</code>, <code>onApprove</code> or <code>onHide</code> returns false it will prevent the modal from closing
      </div>
      <div class="code" data-demo="true">
      $('.ui.basic.test.modal')
        .modal({
          closable  : false,
          onDeny    : function(){
            window.alert('Wait not yet!');
            return false;
          },
          onApprove : function() {
            window.alert('Approved!');
          }
        })
        .modal('show')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalApproveDenyCallbacks1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Examples',
    title2: 'Approve / Deny Callbacks',
    description: 'Modals will automatically tie approve deny callbacks to any positive/approve, negative/deny or ok/cancel buttons.',
    model: '      <div class="ui ignored info message">\n' +
      '        If <code>onDeny</code>, <code>onApprove</code> or <code>onHide</code> returns false it will prevent the modal from closing\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true">\n' +
      '      $(\'.ui.basic.test.modal\')\n' +
      '        .modal({\n' +
      '          closable  : false,\n' +
      '          onDeny    : function(){\n' +
      '            window.alert(\'Wait not yet!\');\n' +
      '            return false;\n' +
      '          },\n' +
      '          onApprove : function() {\n' +
      '            window.alert(\'Approved!\');\n' +
      '          }\n' +
      '        })\n' +
      '        .modal(\'show\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
