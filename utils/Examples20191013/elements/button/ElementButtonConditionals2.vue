<template>
  <div>
    <div class="ui ignored info message">
      Or buttons can have their text localized, or adjusted by using the <code>data-text</code> attribute. If the size of the conditional changes you will need to adjust <code>@orCircleSize</code>
    </div>
    <div class="ui buttons">
      <button class="ui button">un</button>
      <div class="or" data-text="ou"/>
      <button class="ui positive button">deux</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonConditionals2',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'button',
    title1: 'Content',
    title2: 'Conditionals',
    description: 'Button groups can contain conditionals',
    model: '    <div class="ui ignored info message">\n' +
      '      Or buttons can have their text localized, or adjusted by using the <code>data-text</code> attribute. If the size of the conditional changes you will need to adjust <code>@orCircleSize</code>\n' +
      '    </div>\n' +
      '    <div class="ui buttons">\n' +
      '      <button class="ui button">un</button>\n' +
      '      <div class="or" data-text="ou"/>\n' +
      '      <button class="ui positive button">deux</button>\n' +
      '    </div>\n',
  },
};
</script>
