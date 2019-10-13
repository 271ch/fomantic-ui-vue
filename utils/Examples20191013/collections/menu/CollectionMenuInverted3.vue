<template>
  <div>
    <div class="ui inverted vertical pointing menu">
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
  name: 'CollectionMenuInverted3',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A menu may have its colors inverted to show greater contrast',
      model: '    <div class="ui inverted vertical pointing menu">\n' +
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
