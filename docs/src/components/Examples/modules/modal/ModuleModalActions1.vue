<template>
  <div>
      <div class="ui ignored info message">
        <p>Close actions are applied by default to all button actions, in addition an <code>onApprove</code> or <code>onDeny</code> callback will fire if the elements match either selector.</p>
        <div class="code" data-type="css">
          approve  : '.positive, .approve, .ok',
          deny     : '.negative, .deny, .cancel'
        </div>
      </div>
      <div class="ui ignored warning message">
        <p>To prevent a modal action from causing the modal to close, you can <code>return false;</code> from either callback.</p>
      </div>
      <div class="code" data-type="html">
        <div class="ui modal">
          <div class="header">Header</div>
          <div class="content">
            <p/>
          </div>
          <div class="actions">
            <div class="ui approve button">Approve</div>
            <div class="ui button">Neutral</div>
            <div class="ui cancel button">Cancel</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleModalActions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'modal',
    title1: 'Content',
    title2: 'Actions',
    description: 'A modal can contain a row of actions',
    model: '      <div class="ui ignored info message">\n' +
      '        <p>Close actions are applied by default to all button actions, in addition an <code>onApprove</code> or <code>onDeny</code> callback will fire if the elements match either selector.</p>\n' +
      '        <div class="code" data-type="css">\n' +
      '          approve  : \'.positive, .approve, .ok\',\n' +
      '          deny     : \'.negative, .deny, .cancel\'\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui ignored warning message">\n' +
      '        <p>To prevent a modal action from causing the modal to close, you can <code>return false;</code> from either callback.</p>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui modal">\n' +
      '          <div class="header">Header</div>\n' +
      '          <div class="content">\n' +
      '            <p/>\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <div class="ui approve button">Approve</div>\n' +
      '            <div class="ui button">Neutral</div>\n' +
      '            <div class="ui cancel button">Cancel</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
