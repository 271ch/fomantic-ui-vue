<template>
  <div>
    <FuiButton floated=right>Right Floated</FuiButton>
    <FuiButton floated=left>Left Floated</FuiButton>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonFloated1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Variations',
    title2: 'Floated',
    description: 'A button can be aligned to the left or right of its container',
    model: '    <button class="ui right floated button">Right Floated</button>\n' +
      '    <button class="ui left floated button">Left Floated</button>\n',
  },
};
</script>
