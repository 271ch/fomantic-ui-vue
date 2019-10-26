<template>
  <div>
    <FuiMenu fixed=top>
      <FuiItem>
        <img src="/images/logo.png">
      </FuiItem>
      <FuiItem a>Features</FuiItem>
      <FuiItem a>Testimonials</FuiItem>
      <FuiItem a>Sign-in</FuiItem>
    </FuiMenu>
    <FuiMenu fixed=bottom>
      <FuiItem src="/images/logo.png">
      </FuiItem>
      <FuiItem a>Features</FuiItem>
      <FuiItem a>Testimonials</FuiItem>
      <FuiItem a>Sign-in</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFixed1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fixed',
    description: 'A menu can be fixed to a side of its context',
    model: '    <div class="ui top fixed menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png">\n' +
      '        </div>\n' +
      '        <a class="item">Features</a>\n' +
      '        <a class="item">Testimonials</a>\n' +
      '        <a class="item">Sign-in</a>\n' +
      '      </div>\n' +
      '      <div class="ui bottom fixed menu">\n' +
      '        <div class="item">\n' +
      '          <img src="/images/logo.png">\n' +
      '        </div>\n' +
      '        <a class="item">Features</a>\n' +
      '        <a class="item">Testimonials</a>\n' +
      '        <a class="item">Sign-in</a>\n' +
      '      </div>',
  },
};
</script>
