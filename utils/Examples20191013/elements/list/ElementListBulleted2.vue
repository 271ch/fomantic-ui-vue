<template>
  <div>
    <div class="ignored ui info message">For convenience, a simple bulleted list can also use <code>ul</code> tag.</div>
    <ul class="ui list">
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ElementListBulleted2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Bulleted',
    description: 'A list can mark items with a bullet',
    model: '    <div class="ignored ui info message">For convenience, a simple bulleted list can also use <code>ul</code> tag.</div>\n' +
      '    <ul class="ui list">\n' +
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
