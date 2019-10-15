<template>
  <div>
    <FuiButtonGroup color=blue>
      <FuiButton>One</FuiButton>
      <FuiButton>Two</FuiButton>
      <FuiButton>Three</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonColoredButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Colored Buttons',
    description: 'Groups can have a shared color',
    model: '    <div class="ui blue buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
