<template>
  <div>
    <div class="ui list">
      <div class="item">
        1
      </div>
      <div class="item">
        2
      </div>
      <div class="item">
        3
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListItem1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Content',
      title2: 'Item',
      description: 'A list item can contain a set of items',
      model: '    <div class="ui list">\n' +
      '      <div class="item">\n' +
      '        1\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        2\n' +
      '      </div>\n' +
      '      <div class="item">\n' +
      '        3\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
