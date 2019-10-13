<template>
  <div>
    <div class="blue ui buttons">
      <button class="ui button">One</button>
      <button class="ui button">Two</button>
      <button class="ui button">Three</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonColoredButtons1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Group Variations',
      title2: 'Colored Buttons',
      description: 'Groups can have a shared color',
      model: '    <div class="blue ui buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
    };
  },
};
</script>
