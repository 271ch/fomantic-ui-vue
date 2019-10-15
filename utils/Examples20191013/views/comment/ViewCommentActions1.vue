<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/joe.jpg"/>
        </a>
        <div class="content">
          <a class="author">Tom Lukic</a>
          <div class="text">
            This will be great for business reports. I will definitely download this.
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
            <a class="save">Save</a>
            <a class="hide">Hide</a>
            <a>
              <i class="expand icon"/>
              Full-screen
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentActions1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'comment',
    title1: 'Content',
    title2: 'Actions',
    description: 'A comment can contain an list of actions a user may perform related to this comment.',
    model: '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/joe.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Tom Lukic</a>\n' +
      '          <div class="text">\n' +
      '            This will be great for business reports. I will definitely download this.\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '            <a class="save">Save</a>\n' +
      '            <a class="hide">Hide</a>\n' +
      '            <a>\n' +
      '              <i class="expand icon"/>\n' +
      '              Full-screen\n' +
      '            </a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
