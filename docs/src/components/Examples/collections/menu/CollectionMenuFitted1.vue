<template>
  <div>
    <div class="ui menu">
      <div class="fitted item">
        No padding whatsoever
      </div>
      <div class="horizontally fitted item">
        No horizontal padding
      </div>
      <div class="vertically fitted item">
        No vertical padding
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuFitted1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
