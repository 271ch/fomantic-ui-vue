<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"/>
      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced
    </div>
    <div class="ui items">
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="content">
          <div class="header">
            Top Aligned
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="middle aligned content">
          <div class="header">
            Middle Aligned
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="bottom aligned content">
          <div class="header">
            Bottom Aligned
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemVerticalAlignment1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'item',
    title1: 'Variations',
    title2: 'Vertical Alignment',
    description: 'Content can specify its vertical alignment',
    model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"/>\n' +
      '      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced\n' +
      '    </div>\n' +
      '    <div class="ui items">\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">\n' +
      '            Top Aligned\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="middle aligned content">\n' +
      '          <div class="header">\n' +
      '            Middle Aligned\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="bottom aligned content">\n' +
      '          <div class="header">\n' +
      '            Bottom Aligned\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
