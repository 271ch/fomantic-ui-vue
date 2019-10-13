<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/joe.jpg"/>
        </a>
        <div class="content">
          <a class="author">Joe Henderson</a>
          <div class="metadata">
            <div class="date">1 day ago</div>
          </div>
          <div class="text">
            <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
            <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/christian.jpg"/>
        </a>
        <div class="content">
          <a class="author">Christian Rocha</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
          </div>
          <div class="text">
            I re-tweeted this.
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <form class="ui reply form">
        <div class="field">
          <textarea/>
        </div>
        <div class="ui primary submit labeled icon button">
          <i class="icon edit"/> Add Comment
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentReplyForm2',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'comment',
      title1: 'Content',
      title2: 'Reply Form',
      description: 'A comment can contain a form to reply to a comment. This may have arbitrary content.',
      model: '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/joe.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Joe Henderson</a>\n' +
      '          <div class="metadata">\n' +
      '            <div class="date">1 day ago</div>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>\n' +
      '            <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/christian.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Christian Rocha</a>\n' +
      '          <div class="metadata">\n' +
      '            <div class="date">2 days ago</div>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            I re-tweeted this.\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <form class="ui reply form">\n' +
      '        <div class="field">\n' +
      '          <textarea/>\n' +
      '        </div>\n' +
      '        <div class="ui primary submit labeled icon button">\n' +
      '          <i class="icon edit"/> Add Comment\n' +
      '        </div>\n' +
      '      </form>\n' +
      '    </div>\n',
    };
  },
};
</script>
