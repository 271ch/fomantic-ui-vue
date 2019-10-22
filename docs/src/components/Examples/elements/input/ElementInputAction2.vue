<template>
  <div>
    <FuiInput action=left value="$52.03">
      <template #before>
        <FuiButton color=teal labeled icon>
          <FuiIcon name=cart></FuiIcon>
          Checkout
        </FuiButton>
      </template>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Action',
    description: 'An input can be formatted to alert the user to an action they may perform',
    model: '    <div class="ui left action input">\n' +
      '      <button class="ui teal labeled icon button">\n' +
      '        <i class="cart icon"></i>\n' +
      '        Checkout\n' +
      '      </button>\n' +
      '      <input type="text" value="$52.03">\n' +
      '    </div>\n',
  },
};
</script>
