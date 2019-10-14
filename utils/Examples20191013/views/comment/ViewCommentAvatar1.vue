<template>
  <div>
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/elliot.jpg"/>
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommentAvatar1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'comment',
    title1: 'Content',
    title2: 'Avatar',
    description: 'A comment can contain an image or avatar',
    model: '    <div class="ui comments">\n' +
      '      <div class="comment">\n' +
      '        <a class="avatar">\n' +
      '          <img src="/images/avatar/small/elliot.jpg"/>\n' +
      '        </a>\n' +
      '        <div class="content">\n' +
      '          <a class="author">Elliot Fu</a>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
