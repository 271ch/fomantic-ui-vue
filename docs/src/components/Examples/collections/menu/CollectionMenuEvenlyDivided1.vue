<template>
  <div>
    <FuiMenu fluid n=three>
      <FuiItem a>Buy</FuiItem>
      <FuiItem a>Sell</FuiItem>
      <FuiItem a>Rent</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuEvenlyDivided1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Variations',
    title2: 'Evenly Divided',
    description: 'A menu may divide its items evenly',
    model: '    <div class="ui fluid three item menu">\n' +
      '      <a class="item">Buy</a>\n' +
      '      <a class="item">Sell</a>\n' +
      '      <a class="item">Rent</a>\n' +
      '    </div>\n',
  },
};
</script>
