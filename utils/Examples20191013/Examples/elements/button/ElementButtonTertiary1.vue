<template>
  <div>
    <button class="ui tertiary button">
      Cancel Action
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonTertiary1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Tertiary',
      description: 'An none bordered less important button',
      model: '    <button class="ui tertiary button">\n' +
      '      Cancel Action\n' +
      '    </button>\n',
    };
  },
};
</script>
