<template>
  <div>
    <FuiMenu vertical>
      <FuiItem a>
        <FuiHeader level=4>Promotions</FuiHeader>
        <p>Check out our new promotions</p>
      </FuiItem>
      <FuiItem a>
        <FuiHeader level=4>Coupons</FuiHeader>
        <p>Check out our collection of coupons</p>
      </FuiItem>
      <FuiItem a>
        <FuiHeader level=4>Rebates</FuiHeader>
        <p>Visit our rebate forum for information on claiming rebates</p>
      </FuiItem>
    </FuiMenu>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuText1A',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'menu',
    title1: 'Content',
    title2: 'Text',
    description: 'A vertical menu item can include any type of text content.',
    model: '    <div class="ui vertical menu">\n' +
      '      <a class="item">\n' +
      '        <h4 class="ui header">Promotions</h4>\n' +
      '        <p>Check out our new promotions</p>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <h4 class="ui header">Coupons</h4>\n' +
      '        <p>Check out our collection of coupons</p>\n' +
      '      </a>\n' +
      '      <a class="item">\n' +
      '        <h4 class="ui header">Rebates</h4>\n' +
      '        <p>Visit our rebate forum for information on claiming rebates</p>\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
