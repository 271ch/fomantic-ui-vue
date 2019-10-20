<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"></i>
      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced
    </div>
    <div class="ui items">
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="content">
          <div class="header">Arrowhead Valley Camp</div>
          <div class="meta">
            <span class="price">$1200</span>
            <span class="stay">1 Month</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="content">
          <div class="header">Buck's Homebrew Stayaway</div>
          <div class="meta">
            <span class="price">$1000</span>
            <span class="stay">2 Weeks</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png">
        </div>
        <div class="content">
          <div class="header">Astrology Camp</div>
          <div class="meta">
            <span class="price">$1600</span>
            <span class="stay">6 Weeks</span>
          </div>
          <div class="description">
            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemMetadata1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'item',
    title1: 'Content',
    title2: 'Metadata',
    description: 'An item can contain content metadata',
    model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"></i>\n' +
      '      You can include an arbitrary amount of metadata using your own class conventions, all child elements will automatically be spaced\n' +
      '    </div>\n' +
      '    <div class="ui items">\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Arrowhead Valley Camp</div>\n' +
      '          <div class="meta">\n' +
      '            <span class="price">$1200</span>\n' +
      '            <span class="stay">1 Month</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Buck\'s Homebrew Stayaway</div>\n' +
      '          <div class="meta">\n' +
      '            <span class="price">$1000</span>\n' +
      '            <span class="stay">2 Weeks</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        <div class="ui small image">\n' +
      '          <img src="/images/wireframe/image.png">\n' +
      '        </div>\n' +
      '        <div class="content">\n' +
      '          <div class="header">Astrology Camp</div>\n' +
      '          <div class="meta">\n' +
      '            <span class="price">$1600</span>\n' +
      '            <span class="stay">6 Weeks</span>\n' +
      '          </div>\n' +
      '          <div class="description">\n' +
      '            <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
