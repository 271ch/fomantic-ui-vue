<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/christian.jpg"/>
        </a>
        <div class="content">
          <a class="author">Christian Rocha</a>
          <div class="metadata">
            <span class="date">2 days ago</span>
          </div>
          <div class="text">
            I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
        <div class="collapsed comments">
          <div class="comment">
            <a class="avatar">
              <img src="/images/avatar/small/elliot.jpg"/>
            </a>
            <div class="content">
              <a class="author">Elliot Fu</a>
              <div class="metadata">
                <span class="date">1 day ago</span>
              </div>
              <div class="text">
                No, it wont
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
                    <span class="date">20 minutes ago</span>
                  </div>
                  <div class="text">
                    Maybe it would.
                  </div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentCollapsed1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'comment',
      title1: 'States',
      title2: 'Collapsed',
      description: 'Comments can be collapsed, or hidden from view',
      model: '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/christian.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Christian Rocha</a>\n' +
      '          <div class="metadata">\n' +
      '            <span class="date">2 days ago</span>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            I\'m very interested in this motherboard. Do you know if it\'d work in a Intel LGA775 CPU socket?\n' +
      '          </div>\n' +
      '          <div class="actions">\n' +
      '            <a class="reply">Reply</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="collapsed comments">\n' +
      '          <div class="comment">\n' +
      '            <a class="avatar">\n' +
      '              <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '            </a>\n' +
      '            <div class="content">\n' +
      '              <a class="author">Elliot Fu</a>\n' +
      '              <div class="metadata">\n' +
      '                <span class="date">1 day ago</span>\n' +
      '              </div>\n' +
      '              <div class="text">\n' +
      '                No, it wont\n' +
      '              </div>\n' +
      '              <div class="actions">\n' +
      '                <a class="reply">Reply</a>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '            <div class="comments">\n' +
      '              <div class="comment">\n' +
      '                <a class="avatar">\n' +
      '                  <img src="/images/avatar/small/jenny.jpg"/>\n' +
      '                </a>\n' +
      '                <div class="content">\n' +
      '                  <a class="author">Jenny Hess</a>\n' +
      '                  <div class="metadata">\n' +
      '                    <span class="date">20 minutes ago</span>\n' +
      '                  </div>\n' +
      '                  <div class="text">\n' +
      '                    Maybe it would.\n' +
      '                  </div>\n' +
      '                  <div class="actions">\n' +
      '                    <a class="reply">Reply</a>\n' +
      '                  </div>\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
