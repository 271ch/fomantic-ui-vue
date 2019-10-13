<template>
  <div>
    <div class="ui bulleted list">
      <div class="item">Gaining Access</div>
      <div class="item">Inviting Friends</div>
      <div class="item">
        <div>Benefits</div>
        <div class="list">
          <a class="item" href="#">Link to somewhere</a>
          <div class="item">Rebates</div>
          <div class="item">Discounts</div>
        </div>
      </div>
      <div class="item">Warranty</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListBulleted1',
  data: function () {
    return {
      converted: false,
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
    };
  },
};
</script>
