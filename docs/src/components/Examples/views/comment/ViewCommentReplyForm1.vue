<template>
  <div>
    <div class="ui ignored info message">
      <p>If a comment form is located inside a <code> ui comment</code> it will be formatted as an nested reply form. If the comment form is included after all comments, it will be formatted as a normal reply form.</p>
    </div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/steve.jpg"/>
        </a>
        <div class="content">
          <a class="author">Steve Jobes</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
          </div>
          <div class="text">
            Revolutionary!
          </div>
          <div class="actions">
            <a class="reply active">Reply</a>
          </div>
          <form class="ui reply form">
            <div class="field">
              <textarea/>
            </div>
            <div class="ui primary submit labeled icon button">
              <i class="icon edit"/> Add Reply
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentReplyForm1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'comment',
      title1: 'Content',
      title2: 'Reply Form',
      description: 'A comment can contain a form to reply to a comment. This may have arbitrary content.',
      model: '    <div class="ui ignored info message">\n' +
      '      <p>If a comment form is located inside a <code> ui comment</code> it will be formatted as an nested reply form. If the comment form is included after all comments, it will be formatted as a normal reply form.</p>\n' +
      '    </div>\n' +
      '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/steve.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Steve Jobes</a>\n' +
      '          <div class="metadata">\n' +
      '            <div class="date">2 days ago</div>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            Revolutionary!\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply active">Reply</a>\n' +
      '          </div>\n' +
      '          <form class="ui reply form">\n' +
      '            <div class="field">\n' +
      '              <textarea/>\n' +
      '            </div>\n' +
      '            <div class="ui primary submit labeled icon button">\n' +
      '              <i class="icon edit"/> Add Reply\n' +
      '            </div>\n' +
      '          </form>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
