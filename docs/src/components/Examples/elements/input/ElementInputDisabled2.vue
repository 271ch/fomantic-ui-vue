<template>
  <div>
    <FuiInput placeholder="Search..." icon disabled>
      <template #before>
        <FuiIcon name=search></FuiIcon>
      </template>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputDisabled2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'States',
    title2: 'Disabled',
    description: 'An input field can show that it is disabled',
    model: '    <div class="ui disabled icon input">\n' +
      '      <i class="search icon"></i>\n' +
      '      <input type="text" placeholder="Search...">\n' +
      '    </div>\n',
  },
};
</script>
