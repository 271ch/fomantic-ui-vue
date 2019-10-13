<template>
  <div>
    <a class="ui card" href="http://www.dog.com">
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
    </a>
  </div>
</template>

<script>
export default {
  name: 'ViewCardLinkCard1',
  data: function () {
    return {
      converted: false,
      elementType: 'views',
      element: 'card',
      title1: 'Variations',
      title2: 'Link Card',
      description: 'A card can be formatted so that the entire contents link to another page',
      model: '    <a class="ui card" href="http://www.dog.com">\n' +
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
      '    </a>\n',
    };
  },
};
</script>
