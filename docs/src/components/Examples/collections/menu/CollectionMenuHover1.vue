<template>
  <div>
    <div class="ui ignore warning message">Menu items are only hoverable if they are <code>a</code> links, or given the class name <code>link</code></div>
    <div class="ui compact menu">
      <a class="item">
        A link
      </a>
      <div class="link item">
        div Link
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHover1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'menu',
    title1: 'States',
    title2: 'Hover',
    description: 'A menu item can be hovered',
    model: '    <div class="ui ignore warning message">Menu items are only hoverable if they are <code>a</code> links, or given the class name <code>link</code></div>\n' +
      '    <div class="ui compact menu">\n' +
      '      <a class="item">\n' +
      '        A link\n' +
      '      </a>\n' +
      '      <div class="link item">\n' +
      '        div Link\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
