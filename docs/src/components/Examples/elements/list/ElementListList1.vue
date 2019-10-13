<template>
  <div>
    <div class="ui list">
      <div class="item">Apples</div>
      <div class="item">Pears</div>
      <div class="item">Oranges</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListList1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Types',
      title2: 'List',
      description: 'A list groups related content',
      model: '    <div class="ui list">\n' +
      '      <div class="item">Apples</div>\n' +
      '      <div class="item">Pears</div>\n' +
      '      <div class="item">Oranges</div>\n' +
      '    </div>\n',
    };
  },
};
</script>
