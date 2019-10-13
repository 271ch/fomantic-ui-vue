<template>
  <div>
    <button class="ui icon button">
      <i class="cloud icon"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonIcon1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Icon',
      description: 'A button can have only an icon',
      model: '    <button class="ui icon button">\n' +
      '      <i class="cloud icon"/>\n' +
      '    </button>\n',
    };
  },
};
</script>
