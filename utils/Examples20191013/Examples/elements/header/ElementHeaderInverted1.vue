<template>
  <div>
    <div class="ui ignored info message">
      Inverted headers use modified light versions of your site's color scheme that are adapted to have more contrast on dark background
    </div>
    <div class="ui inverted segment">
      <h4 class="ui red inverted header">Red</h4>
      <h4 class="ui orange inverted header">Orange</h4>
      <h4 class="ui yellow inverted header">Yellow</h4>
      <h4 class="ui olive inverted header">Olive</h4>
      <h4 class="ui green inverted header">Green</h4>
      <h4 class="ui teal inverted header">Teal</h4>
      <h4 class="ui blue inverted header">Blue</h4>
      <h4 class="ui purple inverted header">Purple</h4>
      <h4 class="ui violet inverted header">Violet</h4>
      <h4 class="ui pink inverted header">Pink</h4>
      <h4 class="ui brown inverted header">Brown</h4>
      <h4 class="ui grey inverted header">Grey</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderInverted1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Variations',
      title2: 'Inverted',
      description: 'A header can have its colors inverted for contrast',
      model: '    <div class="ui ignored info message">\n' +
      '      Inverted headers use modified light versions of your site\'s color scheme that are adapted to have more contrast on dark background\n' +
      '    </div>\n' +
      '    <div class="ui inverted segment">\n' +
      '      <h4 class="ui red inverted header">Red</h4>\n' +
      '      <h4 class="ui orange inverted header">Orange</h4>\n' +
      '      <h4 class="ui yellow inverted header">Yellow</h4>\n' +
      '      <h4 class="ui olive inverted header">Olive</h4>\n' +
      '      <h4 class="ui green inverted header">Green</h4>\n' +
      '      <h4 class="ui teal inverted header">Teal</h4>\n' +
      '      <h4 class="ui blue inverted header">Blue</h4>\n' +
      '      <h4 class="ui purple inverted header">Purple</h4>\n' +
      '      <h4 class="ui violet inverted header">Violet</h4>\n' +
      '      <h4 class="ui pink inverted header">Pink</h4>\n' +
      '      <h4 class="ui brown inverted header">Brown</h4>\n' +
      '      <h4 class="ui grey inverted header">Grey</h4>\n' +
      '    </div>\n',
    };
  },
};
</script>
