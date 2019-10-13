<template>
  <div>
    <button class="ui toggle button">
      Vote
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonToggle1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Toggle',
      description: 'A button can be formatted to toggle on and off',
      model: '    <button class="ui toggle button">\n' +
      '      Vote\n' +
      '    </button>\n',
    };
  },
};
</script>
