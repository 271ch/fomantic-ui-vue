<template>
  <div>
    <div class="ui inverted segment">
      <button class="ui inverted button">Standard</button>
      <button class="ui inverted primary button">Primary</button>
      <button class="ui inverted secondary button">Secondary</button>
      <button class="ui inverted red button">Red</button>
      <button class="ui inverted orange button">Orange</button>
      <button class="ui inverted yellow button">Yellow</button>
      <button class="ui inverted olive button">Olive</button>
      <button class="ui inverted green button">Green</button>
      <button class="ui inverted teal button">Teal</button>
      <button class="ui inverted blue button">Blue</button>
      <button class="ui inverted violet button">Violet</button>
      <button class="ui inverted purple button">Purple</button>
      <button class="ui inverted pink button">Pink</button>
      <button class="ui inverted brown button">Brown</button>
      <button class="ui inverted grey button">Grey</button>
      <button class="ui inverted black button">Black</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementButtonInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'button',
      title1: 'Types',
      title2: 'Inverted',
      description: 'A button can be formatted to appear on dark backgrounds',
      model: '    <div class="ui inverted segment">\n' +
      '      <button class="ui inverted button">Standard</button>\n' +
      '      <button class="ui inverted primary button">Primary</button>\n' +
      '      <button class="ui inverted secondary button">Secondary</button>\n' +
      '      <button class="ui inverted red button">Red</button>\n' +
      '      <button class="ui inverted orange button">Orange</button>\n' +
      '      <button class="ui inverted yellow button">Yellow</button>\n' +
      '      <button class="ui inverted olive button">Olive</button>\n' +
      '      <button class="ui inverted green button">Green</button>\n' +
      '      <button class="ui inverted teal button">Teal</button>\n' +
      '      <button class="ui inverted blue button">Blue</button>\n' +
      '      <button class="ui inverted violet button">Violet</button>\n' +
      '      <button class="ui inverted purple button">Purple</button>\n' +
      '      <button class="ui inverted pink button">Pink</button>\n' +
      '      <button class="ui inverted brown button">Brown</button>\n' +
      '      <button class="ui inverted grey button">Grey</button>\n' +
      '      <button class="ui inverted black button">Black</button>\n' +
      '    </div>\n',
    };
  },
};
</script>
