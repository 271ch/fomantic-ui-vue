<template>
  <div>
    <div class="ui ignored info message">You can also manually specify a value for an ordered list using <code>data-value</code> on a <code>div</code>, or <code>value</code> on an <code>li</code>
    </div>
    <ol class="ui list">
      <li value="*">Signing Up</li>
      <li value="*">User Benefits</li>
      <li value="*">User Types
        <ol>
          <li value="-">Admin</li>
          <li value="-">Power User</li>
          <li value="-">Regular User</li>
        </ol>
      </li>
      <li value="*">Deleting Your Account</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ElementListOrdered4',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Ordered',
    description: 'A list can be ordered numerically',
    model: '    <div class="ui ignored info message">You can also manually specify a value for an ordered list using <code>data-value</code> on a <code>div</code>, or <code>value</code> on an <code>li</code>\n' +
      '    </div>\n' +
      '    <ol class="ui list">\n' +
      '      <li value="*">Signing Up</li>\n' +
      '      <li value="*">User Benefits</li>\n' +
      '      <li value="*">User Types\n' +
      '        <ol>\n' +
      '          <li value="-">Admin</li>\n' +
      '          <li value="-">Power User</li>\n' +
      '          <li value="-">Regular User</li>\n' +
      '        </ol>\n' +
      '      </li>\n' +
      '      <li value="*">Deleting Your Account</li>\n' +
      '    </ol>\n',
  },
};
</script>
