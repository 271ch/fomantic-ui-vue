<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"/>
      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">
          <span class="right floated time">2 days ago</span>
          <span class="category">Animals</span>
        </div>
        <div class="description">
          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
          <img class="ui avatar image" src="/images/avatar/small/matt.jpg"/> Matt
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardFloatedContent1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Variations',
    title2: 'Floated Content',
    description: 'Any content element can be floated left or right',
    model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"/>\n' +
      '      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced\n' +
      '    </div>\n' +
      '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <div class="header">Cute Dog</div>\n' +
      '        <div class="meta">\n' +
      '          <span class="right floated time">2 days ago</span>\n' +
      '          <span class="category">Animals</span>\n' +
      '        </div>\n' +
      '        <div class="description">\n' +
      '          <img class="ui wireframe image" src="/images/wireframe/paragraph.png"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <div class="right floated author">\n' +
      '          <img class="ui avatar image" src="/images/avatar/small/matt.jpg"/> Matt\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
