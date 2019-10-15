<template>
  <div>
    <div class="ui ignored info message">
      Stackable menus are intended to be used with only simple menu content. Stacked menus will not replicate all additional stylings for vertical menus like adjusting dropdown position.
    </div>
    <div class="ui stackable menu">
      <div class="item">
        <img src="/images/logo.png"/>
      </div>
      <a class="item">Features</a>
      <a class="item">Testimonials</a>
      <a class="item">Sign-in</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuStackable1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Stackable',
    description: 'A menu can stack at mobile resolutions',
    model: '    <div class="ui ignored info message">\n' +
      '      Stackable menus are intended to be used with only simple menu content. Stacked menus will not replicate all additional stylings for vertical menus like adjusting dropdown position.\n' +
      '    </div>\n' +
      '    <div class="ui stackable menu">\n' +
      '      <div class="item">\n' +
      '        <img src="/images/logo.png"/>\n' +
      '      </div>\n' +
      '      <a class="item">Features</a>\n' +
      '      <a class="item">Testimonials</a>\n' +
      '      <a class="item">Sign-in</a>\n' +
      '    </div>\n',
  },
};
</script>
