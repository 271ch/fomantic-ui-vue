<template>
  <div>
    <FuiMenu fixed=left vertical>
      <FuiItem>
        <FuiImage src="/images/logo.png" mini></FuiImage>
      </FuiItem>
      <FuiItem a>Features</FuiItem>
      <FuiItem a>Testimonials</FuiItem>
      <FuiItem a>Sign-in</FuiItem>
    </FuiMenu>
    <FuiMenu fixed=right vertical>
      <FuiItem>
        <FuiImage src="/images/logo.png" mini></FuiImage>
      </FuiItem>
      <FuiItem a>Features</FuiItem>
      <FuiItem a>Testimonials</FuiItem>
      <FuiItem a>Sign-in</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFixed2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fixed',
    description: 'A menu can be fixed to a side of its context',
    model: '    <div class="ui left fixed vertical menu">\n' +
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
      '      </div>',
  },
};
</script>
