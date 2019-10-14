<template>
  <div>
    <FuiButton active>
      <FuiIcon name=user></FuiIcon>
      Follow
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonActive1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'States',
    title2: 'Active',
    description: 'A button can show it is currently the active user selection',
    model: '    <button class="ui active button">\n' +
      '      <i class="user icon"/>\n' +
      '      Follow\n' +
      '    </button>\n',
  },
};
</script>
