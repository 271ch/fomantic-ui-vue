<template>
  <div>
    <button class="ui circular facebook icon button">
      <i class="facebook icon"/>
    </button>
    <button class="ui circular twitter icon button">
      <i class="twitter icon"/>
    </button>
    <button class="ui circular linkedin icon button">
      <i class="linkedin icon"/>
    </button>
    <button class="ui circular google plus icon button">
      <i class="google plus icon"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonCircular2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Variations',
      title2: 'Circular',
      description: 'A button can be circular',
      model: '    <button class="ui circular facebook icon button">\n' +
      '      <i class="facebook icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular twitter icon button">\n' +
      '      <i class="twitter icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular linkedin icon button">\n' +
      '      <i class="linkedin icon"/>\n' +
      '    </button>\n' +
      '    <button class="ui circular google plus icon button">\n' +
      '      <i class="google plus icon"/>\n' +
      '    </button>\n',
    };
  },
};
</script>
