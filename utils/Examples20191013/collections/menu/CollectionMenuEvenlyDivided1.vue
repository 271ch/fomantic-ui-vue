<template>
  <div>
    <div class="ui fluid three item menu">
      <a class="item">Buy</a>
      <a class="item">Sell</a>
      <a class="item">Rent</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuEvenlyDivided1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
