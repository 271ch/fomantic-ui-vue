<template>
  <div>
    <div class="large ui buttons">
      <button class="ui button">One</button>
      <button class="ui button">Two</button>
      <button class="ui button">Three</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonGroupSizes1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Group Variations',
      title2: 'Group Sizes',
      description: 'Groups can have a shared size',
      model: '    <div class="large ui buttons">\n' +
      '      <button class="ui button">One</button>\n' +
      '      <button class="ui button">Two</button>\n' +
      '      <button class="ui button">Three</button>\n' +
      '    </div>\n',
    };
  },
};
</script>
