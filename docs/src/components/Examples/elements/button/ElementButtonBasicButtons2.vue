<template>
  <div>
    <FuiButtonGroup>
      <FuiButton color=red basic>One</FuiButton>
      <FuiButton color=blue basic>Two</FuiButton>
      <FuiButton color=green basic>Three</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasicButtons2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Basic Buttons',
    description: 'A button group can be less pronounced',
    model: '    <div class="ui buttons">\n' +
      '      <button class="ui red basic button">One</button>\n' +
      '      <button class="ui blue basic button">Two</button>\n' +
      '      <button class="ui green basic button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
