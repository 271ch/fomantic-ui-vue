<template>
  <div>
    <iframe src="/iframe/fixed-vertical-menu.html"/>
    <div class="existing code">
      <div class="ui left fixed vertical menu">
        <div class="item">
          <img src="/images/logo.png" class="ui mini image">
        </div>
        <a class="item">Features</a>
        <a class="item">Testimonials</a>
        <a class="item">Sign-in</a>
      </div>
      <div class="ui right fixed vertical menu">
        <div class="item">
          <img src="/images/logo.png" class="ui mini image">
        </div>
        <a class="item">Features</a>
        <a class="item">Testimonials</a>
        <a class="item">Sign-in</a>
      </div>
      <p/>
      <p/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFixed2',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fixed',
    description: 'A menu can be fixed to a side of its context',
    model: '    <iframe src="/iframe/fixed-vertical-menu.html"/>\n' +
      '    <div class="existing code">\n' +
      '      <div class="ui left fixed vertical menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png" class="ui mini image">\n' +
      '        </div>\n' +
      '        <a class="item">Features</a>\n' +
      '        <a class="item">Testimonials</a>\n' +
      '        <a class="item">Sign-in</a>\n' +
      '      </div>\n' +
      '      <div class="ui right fixed vertical menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png" class="ui mini image">\n' +
      '        </div>\n' +
      '        <a class="item">Features</a>\n' +
      '        <a class="item">Testimonials</a>\n' +
      '        <a class="item">Sign-in</a>\n' +
      '      </div>\n' +
      '      <p/>\n' +
      '      <p/>\n' +
      '    </div>\n',
  },
};
</script>
