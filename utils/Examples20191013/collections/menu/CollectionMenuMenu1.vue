<template>
  <div>
    <div class="ui ignored message">
      <p>Starting in <code>2.0</code> menus now use flexbox. This allows each menu item to automatically stretch to the size of the largest item.
    </p></div>
    <div class="ui three item menu">
      <a class="active item">Editorials</a>
      <a class="item">Reviews</a>
      <a class="item">Upcoming Events</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuMenu1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Types',
      title2: 'Menu',
      description: 'A menu',
      model: '    <div class="ui ignored message">\n' +
      '      <p>Starting in <code>2.0</code> menus now use flexbox. This allows each menu item to automatically stretch to the size of the largest item.\n' +
      '    </p></div>\n' +
      '    <div class="ui three item menu">\n' +
      '      <a class="active item">Editorials</a>\n' +
      '      <a class="item">Reviews</a>\n' +
      '      <a class="item">Upcoming Events</a>\n' +
      '    </div>\n',
    };
  },
};
</script>
