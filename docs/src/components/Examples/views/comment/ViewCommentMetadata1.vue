<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/stevie.jpg"/>
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>
              5 Faves
            </div>
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this documentation.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentMetadata1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'comment',
    title1: 'Content',
    title2: 'Metadata',
    description: 'A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.',
    model: '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/stevie.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Stevie Feliciano</a>\n' +
      '          <div class="metadata">\n' +
      '            <div class="date">2 days ago</div>\n' +
      '            <div class="rating">\n' +
      '              <i class="star icon"></i>\n' +
      '              5 Faves\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="text">\n' +
      '            Hey guys, I hope this example comment is helping you read this documentation.\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
