<template>
  <div>
    <FuiMenu n=three>
      <FuiItem a active>Editorials</FuiItem>
      <FuiItem a>Reviews</FuiItem>
      <FuiItem a>Upcoming Events</FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Types',
    title2: 'Menu',
    description: 'A menu',
    model: '    <div class="ui three item menu">\n' +
      '      <a class="active item">Editorials</a>\n' +
      '      <a class="item">Reviews</a>\n' +
      '      <a class="item">Upcoming Events</a>\n' +
      '    </div>\n',
  },
};
</script>
