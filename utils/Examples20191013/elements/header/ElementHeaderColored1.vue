<template>
  <div>
    <h4 class="ui primary header">Primary</h4>
    <h4 class="ui secondary header">Secondary</h4>
    <h4 class="ui red header">Red</h4>
    <h4 class="ui orange header">Orange</h4>
    <h4 class="ui yellow header">Yellow</h4>
    <h4 class="ui olive header">Olive</h4>
    <h4 class="ui green header">Green</h4>
    <h4 class="ui teal header">Teal</h4>
    <h4 class="ui blue header">Blue</h4>
    <h4 class="ui purple header">Purple</h4>
    <h4 class="ui violet header">Violet</h4>
    <h4 class="ui pink header">Pink</h4>
    <h4 class="ui brown header">Brown</h4>
    <h4 class="ui grey header">Grey</h4>
  </div>
</template>

<script>
export default {
  name: 'ElementHeaderColored1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'header',
      title1: 'Variations',
      title2: 'Colored',
      description: 'A header can be formatted with different colors',
      model: '    <h4 class="ui primary header">Primary</h4>\n' +
      '    <h4 class="ui secondary header">Secondary</h4>\n' +
      '    <h4 class="ui red header">Red</h4>\n' +
      '    <h4 class="ui orange header">Orange</h4>\n' +
      '    <h4 class="ui yellow header">Yellow</h4>\n' +
      '    <h4 class="ui olive header">Olive</h4>\n' +
      '    <h4 class="ui green header">Green</h4>\n' +
      '    <h4 class="ui teal header">Teal</h4>\n' +
      '    <h4 class="ui blue header">Blue</h4>\n' +
      '    <h4 class="ui purple header">Purple</h4>\n' +
      '    <h4 class="ui violet header">Violet</h4>\n' +
      '    <h4 class="ui pink header">Pink</h4>\n' +
      '    <h4 class="ui brown header">Brown</h4>\n' +
      '    <h4 class="ui grey header">Grey</h4>\n',
    };
  },
};
</script>
