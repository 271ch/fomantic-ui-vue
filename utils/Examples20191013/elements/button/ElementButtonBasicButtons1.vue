<template>
  <div>
    <div class="ui basic buttons">
      <div class="ui button">One</div>
      <div class="ui button">Two</div>
      <div class="ui button">Three</div>
    </div>
    <div class="ui divider"/>
    <div class="ui vertical basic buttons">
      <button class="ui button">One</button>
      <button class="ui button">Two</button>
      <button class="ui button">Three</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonBasicButtons1',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'button',
    title1: 'Group Variations',
    title2: 'Basic Buttons',
    description: 'A button group can be less pronounced',
    model: '    <div class="ui basic buttons">\n' +
      '      <div class="ui button">One</div>\n' +
      '      <div class="ui button">Two</div>\n' +
      '      <div class="ui button">Three</div>\n' +
      '    </div>\n' +
      '    <div class="ui divider"/>\n' +
      '    <div class="ui vertical basic buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
  },
};
</script>
