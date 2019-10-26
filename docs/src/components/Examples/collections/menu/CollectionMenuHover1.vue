<template>
  <div>
    <FuiMenu compact>
      <FuiItem a>
        A link
      </FuiItem>
      <FuiItem link>
        div Link
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuHover1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'States',
    title2: 'Hover',
    description: 'A menu item can be hovered',
    model: '    <div class="ui compact menu">\n' +
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
