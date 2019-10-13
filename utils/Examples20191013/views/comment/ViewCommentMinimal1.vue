<template>
  <div>
    <div class="ui minimal comments">
      <h3 class="ui dividing header">Comments</h3>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/matt.jpg"/>
        </a>
        <div class="content">
          <a class="author">Matt</a>
          <div class="metadata">
            <span class="date">Today at 5:42PM</span>
          </div>
          <div class="text">
            How artistic!
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg"/>
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
          <div class="metadata">
            <span class="date">Yesterday at 12:30AM</span>
          </div>
          <div class="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
        <div class="comments">
          <div class="comment">
            <a class="avatar">
              <img src="/images/avatar/small/jenny.jpg"/>
            </a>
            <div class="content">
              <a class="author">Jenny Hess</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">
                Elliot you are always so right :)
              </div>
              <div class="actions">
                <a class="reply">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/joe.jpg"/>
        </a>
        <div class="content">
          <a class="author">Joe Henderson</a>
          <div class="metadata">
            <span class="date">5 days ago</span>
          </div>
          <div class="text">
            Dude, this is awesome. Thanks so much
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
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"/> Add Reply
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentMinimal1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'comment',
      title1: 'Variations',
      title2: 'Minimal',
      description: 'Comments can hide extra information unless a user shows intent to interact with a comment.',
      model: '    <div class="ui minimal comments">\n' +
      '      <h3 class="ui dividing header">Comments</h3>\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/matt.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Matt</a>\n' +
      '          <div class="metadata">\n' +
      '            <span class="date">Today at 5:42PM</span>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            How artistic!\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Elliot Fu</a>\n' +
      '          <div class="metadata">\n' +
      '            <span class="date">Yesterday at 12:30AM</span>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            <p>This has been very useful for my research. Thanks as well!</p>\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="comments">\n' +
      '          <div class="comment">\n' +
      '            <a class="avatar">\n' +
      '              <img src="/images/avatar/small/jenny.jpg"/>\n' +
      '            </a>\n' +
      '            <div class="content">\n' +
      '              <a class="author">Jenny Hess</a>\n' +
      '              <div class="metadata">\n' +
      '                <span class="date">Just now</span>\n' +
      '              </div>\n' +
      '              <div class="text">\n' +
      '                Elliot you are always so right :)\n' +
      '              </div>\n' +
      '              <div class="actions">\n' +
      '                <a class="reply">Reply</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/joe.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Joe Henderson</a>\n' +
      '          <div class="metadata">\n' +
      '            <span class="date">5 days ago</span>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            Dude, this is awesome. Thanks so much\n' +
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
      '        <div class="ui blue labeled submit icon button">\n' +
      '          <i class="icon edit"/> Add Reply\n' +
      '        </div>\n' +
      '      </form>\n' +
      '    </div>\n',
    };
  },
};
</script>
