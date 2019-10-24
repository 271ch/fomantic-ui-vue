<template>
  <div>
    <FuiList tag=ul>
      <li>Gaining Access</li>
      <li>Inviting Friends</li>
      <li>Benefits
        <ul>
          <li>Use Anywhere</li>
          <li>Rebates</li>
          <li>Discounts</li>
        </ul>
      </li>
      <li>Warranty</li>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListBulleted2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Bulleted',
    description: 'A list can mark items with a bullet',
    model: '    <ul class="ui list">\n' +
      '      <li>Gaining Access</li>\n' +
      '      <li>Inviting Friends</li>\n' +
      '      <li>Benefits\n' +
      '        <ul>\n' +
      '          <li>Use Anywhere</li>\n' +
      '          <li>Rebates</li>\n' +
      '          <li>Discounts</li>\n' +
      '        </ul>\n' +
      '      </li>\n' +
      '      <li>Warranty</li>\n' +
      '    </ul>\n',
  },
};
</script>
