<template>
  <div>
    <div class="ui ignored info message">These examples use a an <code>iframe</code>, to prevent content from sticking to the browser viewport.</div>
    <div class="ui ignored positive message">For more advanced behaviors consider using a <a href="/modules/sticky.html">sticky menu</a> or <a href="/behaviors/visibility.html#fixing-content-to-viewport">visibility APIs</a>.</div>
    <iframe src="/iframe/fixed-menu.html"/>
    <div class="existing code">
      <div class="ui top fixed menu">
        <div class="item">
          <img src="/images/logo.png"/>
        </div>
        <a class="item">Features</a>
        <a class="item">Testimonials</a>
        <a class="item">Sign-in</a>
      </div>
      <div class="ui bottom fixed menu">
        <div class="item">
          <img src="/images/logo.png"/>
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
  name: 'CollectionMenuFixed1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fixed',
    description: 'A menu can be fixed to a side of its context',
    model: '    <div class="ui ignored info message">These examples use a an <code>iframe</code>, to prevent content from sticking to the browser viewport.</div>\n' +
      '    <div class="ui ignored positive message">For more advanced behaviors consider using a <a href="/modules/sticky.html">sticky menu</a> or <a href="/behaviors/visibility.html#fixing-content-to-viewport">visibility APIs</a>.</div>\n' +
      '    <iframe src="/iframe/fixed-menu.html"/>\n' +
      '    <div class="existing code">\n' +
      '      <div class="ui top fixed menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png"/>\n' +
      '        </div>\n' +
      '        <a class="item">Features</a>\n' +
      '        <a class="item">Testimonials</a>\n' +
      '        <a class="item">Sign-in</a>\n' +
      '      </div>\n' +
      '      <div class="ui bottom fixed menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png"/>\n' +
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
