<template>
  <div>
    <div class="ui ignored info message">Cards can use <a href="/elements/reveal.html">reveal</a> or <a href="/modules/dimmer.html">dimmers</a> to easily show additional content, or options on hover</div>
    <div class="ui card">
      <div class="ui slide masked reveal image">
        <img src="/images/avatar/large/jenny.jpg" class="visible content">
        <img src="/images/avatar/large/elliot.jpg" class="hidden content">
      </div>
      <div class="content">
        <a class="header">Team Fu &amp; Hess</a>
        <div class="meta">
          <span class="date">Created in Sep 2014</span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="users icon"></i>
          2 Members
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCardImage1',
  info: {
    converted: false,
    elementType: 'views',
    element: 'card',
    title1: 'Content',
    title2: 'Image',
    description: 'A card can contain an image',
    model: '    <div class="ui ignored info message">Cards can use <a href="/elements/reveal.html">reveal</a> or <a href="/modules/dimmer.html">dimmers</a> to easily show additional content, or options on hover</div>\n' +
      '    <div class="ui card">\n' +
      '      <div class="ui slide masked reveal image">\n' +
      '        <img src="/images/avatar/large/jenny.jpg" class="visible content">\n' +
      '        <img src="/images/avatar/large/elliot.jpg" class="hidden content">\n' +
      '      </div>\n' +
      '      <div class="content">\n' +
      '        <a class="header">Team Fu &amp; Hess</a>\n' +
      '        <div class="meta">\n' +
      '          <span class="date">Created in Sep 2014</span>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="extra content">\n' +
      '        <a>\n' +
      '          <i class="users icon"></i>\n' +
      '          2 Members\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
