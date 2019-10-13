<template>
  <div>
    <div class="ui compact menu">
      <div class="active item">
        Link
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuActive1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'menu',
      title1: 'States',
      title2: 'Active',
      description: 'A menu item can be active',
      model: '    <div class="ui compact menu">\n' +
      '      <div class="active item">\n' +
      '        Link\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
