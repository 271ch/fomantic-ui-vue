<template>
  <div>
    <div class="ui ignored warning message">
      To ensure cards are equal height use the plural, <a href="#cards"><code>cards</code></a>. Card groups automatically uses <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes" target="_blank">flex</a> styles to match height between cards in the same row.
    </div>
    <div class="ui card">
      <div class="image">
        <img src="/images/avatar2/large/kristy.png"/>
      </div>
      <div class="content">
        <a class="header">Kristy</a>
        <div class="meta">
          <span class="date">Joined in 2013</span>
        </div>
        <div class="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"/>
          22 Friends
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardCard1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Types',
    title2: 'Card',
    description: 'A single card.',
    model: '    <div class="ui ignored warning message">\n' +
      '      To ensure cards are equal height use the plural, <a href="#cards"><code>cards</code></a>. Card groups automatically uses <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes" target="_blank">flex</a> styles to match height between cards in the same row.\n' +
      '    </div>\n' +
      '    <div class="ui card">\n' +
      '      <div class="image">\n' +
      '        <img src="/images/avatar2/large/kristy.png"/>\n' +
      '      </div>\n' +
      '      <div class="content">\n' +
      '        <a class="header">Kristy</a>\n' +
      '        <div class="meta">\n' +
      '          <span class="date">Joined in 2013</span>\n' +
      '        </div>\n' +
      '        <div class="description">\n' +
      '          Kristy is an art director living in New York.\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <a>\n' +
      '          <i class="user icon"/>\n' +
      '          22 Friends\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
