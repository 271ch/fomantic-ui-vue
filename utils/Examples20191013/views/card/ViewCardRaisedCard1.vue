<template>
  <div>
    <div class="ui raised card">
      <div class="content">
        <div class="header">Cute Dog</div>
        <div class="meta">
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
  name: 'ViewCardRaisedCard1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Raised Card',
      description: 'A card may be formatted to raise above the page.',
      model: '    <div class="ui raised card">\n' +
      '      <div class="content">\n' +
      '        <div class="header">Cute Dog</div>\n' +
      '        <div class="meta">\n' +
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
    };
  },
};
</script>
