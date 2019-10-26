<template>
  <div>
    <FuiMenu stackable>
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
  name: 'CollectionMenuStackable1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Stackable',
    description: 'A menu can stack at mobile resolutions',
    model: '    <div class="ui stackable menu">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/logo.png">\n' +
      '      </div>\n' +
      '      <a class="item">Features</a>\n' +
      '      <a class="item">Testimonials</a>\n' +
      '      <a class="item">Sign-in</a>\n' +
      '    </div>\n',
  },
};
</script>
