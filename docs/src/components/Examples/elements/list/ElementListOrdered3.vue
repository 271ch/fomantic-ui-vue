<template>
  <div>
    <FuiList tag=ol suffixed>
      <li>Signing Up</li>
      <li>User Benefits</li>
      <li>User Types
        <ol>
          <li>Admin</li>
          <li>Power User</li>
          <li>Regular User</li>
        </ol>
      </li>
      <li>Deleting Your Account</li>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListOrdered3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Types',
    title2: 'Ordered',
    description: 'A list can be ordered numerically',
    model: '    <ol class="ui suffixed list">\n' +
      '      <li>Signing Up</li>\n' +
      '      <li>User Benefits</li>\n' +
      '      <li>User Types\n' +
      '        <ol>\n' +
      '          <li>Admin</li>\n' +
      '          <li>Power User</li>\n' +
      '          <li>Regular User</li>\n' +
      '        </ol>\n' +
      '      </li>\n' +
      '      <li>Deleting Your Account</li>\n' +
      '    </ol>\n',
  },
};
</script>
