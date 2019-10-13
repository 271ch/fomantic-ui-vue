<template>
  <div>
    <div class="ui ignored warning message">
      Although any tag can be used for a button, it will only be <a href="http://webaim.org/techniques/keyboard/tabindex">keyboard focusable</a> if you use a <code>&lt;button&gt;</code> tag or you add the property <code>tabindex="0"</code>. Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.
    </div>
    <button class="ui button">
      Button
    </button>
    <div class="ui button" tabindex="0">
      Focusable
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonButton2',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Button',
      description: 'A standard button',
      model: '    <div class="ui ignored warning message">\n' +
      '      Although any tag can be used for a button, it will only be <a href="http://webaim.org/techniques/keyboard/tabindex">keyboard focusable</a> if you use a <code>&lt;button&gt;</code> tag or you add the property <code>tabindex="0"</code>. Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.\n' +
      '    </div>\n' +
      '    <button class="ui button">\n' +
      '      Button\n' +
      '    </button>\n' +
      '    <div class="ui button" tabindex="0">\n' +
      '      Focusable\n' +
      '    </div>\n',
    };
  },
};
</script>
