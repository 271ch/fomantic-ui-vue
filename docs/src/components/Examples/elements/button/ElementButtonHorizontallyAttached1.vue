<template>
  <div>
    <FuiButton attached=left>Left</FuiButton>
    <FuiButton attached=right>Right</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonHorizontallyAttached1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Horizontally Attached',
    description: 'A button can be attached to the left or right of other content',
    model: '    <button class="ui left attached button">Left</button>\n' +
      '    <button class="ui right attached button">Right</button>\n',
  },
};
</script>
