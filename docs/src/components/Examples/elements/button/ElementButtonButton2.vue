<template>
  <div>
    <FuiButton>
      Button
    </FuiButton>
    <FuiButton tag=div focusable>
      Focusable
    </FuiButton>
    <FuiButton tag=div>
      Not focusable
    </FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonButton2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Types',
    title2: 'Button',
    description: 'A standard button',
    model: '    <button class="ui button">\n' +
      '      Button\n' +
      '    </button>\n' +
      '    <div class="ui button" tabindex="0">\n' +
      '      Focusable\n' +
      '    </div>\n' +
      '    <div class="ui button">\n' +
      '      Not focusable\n' +
      '    </div>\n',
  },
};
</script>
