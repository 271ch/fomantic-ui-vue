<template>
  <div>
    <FuiList>
      <FuiItem>Apples</FuiItem>
      <FuiItem>Pears</FuiItem>
      <FuiItem>Oranges</FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListList1',
  info: {
    converted: true,
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
  },
};
</script>
