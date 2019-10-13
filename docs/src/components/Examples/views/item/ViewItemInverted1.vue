<template>
  <div>
    <div class="ui ignored info message">
      <i class="info icon"/>
      You need to make sure to set a dark background on your own or wrap your items in an <code>inverted segment</code>
    </div>
    <div class="ui inverted segment">
      <div class="ui inverted items">
        <div class="item">
          <div class="ui small image">
            <img src="/images/wireframe/image.png"/>
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
            <img src="/images/wireframe/image.png"/>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewItemInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'item',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'An item can be inverted to appear on a dark background',
      model: '    <div class="ui ignored info message">\n' +
      '      <i class="info icon"/>\n' +
      '      You need to make sure to set a dark background on your own or wrap your items in an <code>inverted segment</code>\n' +
      '    </div>\n' +
      '    <div class="ui inverted segment">\n' +
      '      <div class="ui inverted items">\n' +
      '        <div class="item">\n' +
      '          <div class="ui small image">\n' +
      '            <img src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <div class="header">Arrowhead Valley Camp</div>\n' +
      '            <div class="meta">\n' +
      '              <span class="price">$1200</span>\n' +
      '              <span class="stay">1 Month</span>\n' +
      '            </div>\n' +
      '            <div class="description">\n' +
      '              <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        <div class="item">\n' +
      '          <div class="ui small image">\n' +
      '            <img src="/images/wireframe/image.png"/>\n' +
      '          </div>\n' +
      '          <div class="content">\n' +
      '            <div class="header">Buck\'s Homebrew Stayaway</div>\n' +
      '            <div class="meta">\n' +
      '              <span class="price">$1000</span>\n' +
      '              <span class="stay">2 Weeks</span>\n' +
      '            </div>\n' +
      '            <div class="description">\n' +
      '              <img src="/images/wireframe/short-paragraph.png" class="ui wireframe image"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
