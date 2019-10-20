<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"></i>
      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">
          <span>2 days ago</span>
          <a>Animals</a>
        </div>
        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardMetadata1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Content',
    title2: 'Metadata',
    description: 'A card can contain content metadata',
    model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"></i>\n' +
      '      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced\n' +
      '    </div>\n' +
      '    <div class="ui card">\n' +
      '      <div class="content">\n' +
      '        <div class="header">Cute Dog</div>\n' +
      '        <div class="meta">\n' +
      '          <span>2 days ago</span>\n' +
      '          <a>Animals</a>\n' +
      '        </div>\n' +
      '        <img src="/images/wireframe/paragraph.png" class="ui wireframe image">\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
