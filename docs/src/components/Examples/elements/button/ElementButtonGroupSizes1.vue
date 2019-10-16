<template>
  <div>
    <FuiButtons size=large>
      <FuiButton>One</FuiButton>
      <FuiButton>Two</FuiButton>
      <FuiButton>Three</FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonGroupSizes1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Group Sizes',
    description: 'Groups can have a shared size',
    model: '    <div class="ui large buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
