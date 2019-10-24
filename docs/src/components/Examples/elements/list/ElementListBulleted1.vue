<template>
  <div>
    <FuiList bulleted>
      <FuiItem>Gaining Access</FuiItem>
      <FuiItem>Inviting Friends</FuiItem>
      <FuiItem>
        <div>Benefits</div>
        <FuiList sub>
          <FuiItem tag=a href="#">Link to somewhere</FuiItem>
          <FuiItem>Rebates</FuiItem>
          <FuiItem>Discounts</FuiItem>
        </FuiList>
      </FuiItem>
      <FuiItem>Warranty</FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListBulleted1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Bulleted',
    description: 'A list can mark items with a bullet',
    model: '    <div class="ui bulleted list">\n' +
      '      <div class="item">Gaining Access</div>\n' +
      '      <div class="item">Inviting Friends</div>\n' +
      '      <div class="item">\n' +
      '        <div>Benefits</div>\n' +
      '        <div class="list">\n' +
      '          <a class="item" href="#">Link to somewhere</a>\n' +
      '          <div class="item">Rebates</div>\n' +
      '          <div class="item">Discounts</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="item">Warranty</div>\n' +
      '    </div>\n',
  },
};
</script>
