<template>
  <div>
    <div class="ui vertical menu">
      <a class="item">
        <h4 class="ui header">Promotions</h4>
        <p>Check out our new promotions</p>
      </a>
      <a class="item">
        <h4 class="ui header">Coupons</h4>
        <p>Check out our collection of coupons</p>
      </a>
      <a class="item">
        <h4 class="ui header">Rebates</h4>
        <p>Visit our rebate forum for information on claiming rebates</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMenuText1_1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
