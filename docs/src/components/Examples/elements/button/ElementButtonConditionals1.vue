<template>
  <div>
    <FuiButtonGroup>
      <FuiButton>Cancel</FuiButton>
      <FuiButtonCondition></FuiButtonCondition>
      <FuiButton positive>Save</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonConditionals1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Content',
    title2: 'Conditionals',
    description: 'Button groups can contain conditionals',
    model: '    <div class="ui buttons">\n' +
      '      <button class="ui button">Cancel</button>\n' +
      '      <div class="or"/>\n' +
      '      <button class="ui positive button">Save</button>\n' +
      '    </div>\n',
  },
};
</script>
