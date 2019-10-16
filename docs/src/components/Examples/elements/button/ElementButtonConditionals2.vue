<template>
  <div>
    <FuiButtonGroup>
      <FuiButton>un</FuiButton>
      <FuiButtonCondition>ou</FuiButtonCondition>
      <FuiButton positive>deux</FuiButton>
    </FuiButtonGroup>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonConditionals2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'button',
    title1: 'Content',
    title2: 'Conditionals',
    description: 'Button groups can contain conditionals',
    model: '    <div class="ui buttons">\n' +
      '      <button class="ui button">un</button>\n' +
      '      <div class="or" data-text="ou"/>\n' +
      '      <button class="ui positive button">deux</button>\n' +
      '    </div>\n',
  },
};
</script>
