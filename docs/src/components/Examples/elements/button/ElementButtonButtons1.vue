<template>
  <div>
    <FuiButtonGroup>
      <FuiButton>One</FuiButton>
      <FuiButton>Two</FuiButton>
      <FuiButton>Three</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonButtons1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Groups',
    title2: 'Buttons',
    description: 'Buttons can exist together as a group',
    model: '    <div class="ui buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
