<template>
  <div>
    <FuiMenu>
      <FuiItem fitted>
        No padding whatsoever
      </FuiItem>
      <FuiItem fitted=horizontally>
        No horizontal padding
      </FuiItem>
      <FuiItem fitted=vertically>
        No vertical padding
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFitted1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Fitted',
    description: 'A menu item or menu can remove element padding, vertically or horizontally',
    model: '    <div class="ui menu">\n' +
      '      <div class="fitted item">\n' +
      '        No padding whatsoever\n' +
      '      </div>\n' +
      '      <div class="horizontally fitted item">\n' +
      '        No horizontal padding\n' +
      '      </div>\n' +
      '      <div class="vertically fitted item">\n' +
      '        No vertical padding\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
