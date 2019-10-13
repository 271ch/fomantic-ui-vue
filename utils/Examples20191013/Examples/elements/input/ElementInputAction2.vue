<template>
  <div>
    <div class="ui left action input">
      <button class="ui teal labeled icon button">
        <i class="cart icon"/>
        Checkout
      </button>
      <input type="text" value="$52.03"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputAction2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'input',
      title1: 'Variations',
      title2: 'Action',
      description: 'An input can be formatted to alert the user to an action they may perform',
      model: '    <div class="ui left action input">\n' +
      '      <button class="ui teal labeled icon button">\n' +
      '        <i class="cart icon"/>\n' +
      '        Checkout\n' +
      '      </button>\n' +
      '      <input type="text" value="$52.03"/>\n' +
      '    </div>\n',
    };
  },
};
</script>
