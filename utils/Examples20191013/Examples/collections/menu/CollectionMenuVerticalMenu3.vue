<template>
  <div>
    <div class="ui vertical text menu">
      <div class="header item">Sort By</div>
      <a class="active item">
        Closest
      </a>
      <a class="item">
        Most Comments
      </a>
      <a class="item">
        Most Popular
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu3',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Types',
      title2: 'Vertical Menu',
      description: 'A vertical menu displays elements vertically..',
      model: '    <div class="ui vertical text menu">\n' +
      '      <div class="header item">Sort By</div>\n' +
      '      <a class="active item">\n' +
      '        Closest\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Most Comments\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Most Popular\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
