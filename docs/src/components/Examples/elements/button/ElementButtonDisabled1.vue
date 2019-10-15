<template>
  <div>
    <FuiButton disabled>
      <FuiIcon name=user></FuiIcon>
      Followed
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonDisabled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'States',
    title2: 'Disabled',
    description: 'A button can show it is currently unable to be interacted with',
    model: '    <button class="ui disabled button">\n' +
      '      <i class="user icon"/>\n' +
      '      Followed\n' +
      '    </button>\n',
  },
};
</script>
