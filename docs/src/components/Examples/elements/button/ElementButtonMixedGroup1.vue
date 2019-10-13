<template>
  <div>
    <div class="ui buttons">
      <button class="ui labeled icon button">
        <i class="left chevron icon"/>
        Back
      </button>
      <button class="ui button">
        <i class="stop icon"/>
        Stop
      </button>
      <button class="ui right labeled icon button">
        Forward
        <i class="right chevron icon"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonMixedGroup1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Group Variations',
      title2: 'Mixed Group',
      description: 'Groups can be formatted to use multiple button types together',
      model: '    <div class="ui buttons">\n' +
      '      <button class="ui labeled icon button">\n' +
      '        <i class="left chevron icon"/>\n' +
      '        Back\n' +
      '      </button>\n' +
      '      <button class="ui button">\n' +
      '        <i class="stop icon"/>\n' +
      '        Stop\n' +
      '      </button>\n' +
      '      <button class="ui right labeled icon button">\n' +
      '        Forward\n' +
      '        <i class="right chevron icon"/>\n' +
      '      </button>\n' +
      '    </div>\n',
    };
  },
};
</script>
