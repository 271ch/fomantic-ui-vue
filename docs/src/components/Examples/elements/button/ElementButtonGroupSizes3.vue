<template>
  <div>
    <FuiButtons size=large>
      <FuiButton>One</FuiButton>
      <FuiButtonCondition></FuiButtonCondition>
      <FuiButton>Two</FuiButton>
    </FuiButtons>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonGroupSizes3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Group Sizes',
    description: 'Groups can have a shared size',
    model: '    <div class="ui large buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <div class="or"/>\n' +
      '      <button class="ui button">Two</button>\n' +
      '    </div>\n',
  },
};
</script>
