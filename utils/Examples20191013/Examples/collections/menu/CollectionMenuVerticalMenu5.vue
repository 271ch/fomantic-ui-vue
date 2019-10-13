<template>
  <div>
    <div class="ui secondary vertical pointing menu">
      <a class="active item">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <a class="item">
        Friends
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuVerticalMenu5',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Types',
      title2: 'Vertical Menu',
      description: 'A vertical menu displays elements vertically..',
      model: '    <div class="ui secondary vertical pointing menu">\n' +
      '      <a class="active item">\n' +
      '        Home\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Messages\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        Friends\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
