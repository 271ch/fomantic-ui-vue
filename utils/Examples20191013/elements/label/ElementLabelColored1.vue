<template>
  <div>
    <a class="ui primary label">Primary</a>
    <a class="ui secondary label">Secondary</a>
    <a class="ui red label">Red</a>
    <a class="ui orange label">Orange</a>
    <a class="ui yellow label">Yellow</a>
    <a class="ui olive label">Olive</a>
    <a class="ui green label">Green</a>
    <a class="ui teal label">Teal</a>
    <a class="ui blue label">Blue</a>
    <a class="ui violet label">Violet</a>
    <a class="ui purple label">Purple</a>
    <a class="ui pink label">Pink</a>
    <a class="ui brown label">Brown</a>
    <a class="ui grey label">Grey</a>
    <a class="ui black label">Black</a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelColored1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Variations',
      title2: 'Colored',
      description: 'A label can have different colors',
      model: '    <a class="ui primary label">Primary</a>\n' +
      '    <a class="ui secondary label">Secondary</a>\n' +
      '    <a class="ui red label">Red</a>\n' +
      '    <a class="ui orange label">Orange</a>\n' +
      '    <a class="ui yellow label">Yellow</a>\n' +
      '    <a class="ui olive label">Olive</a>\n' +
      '    <a class="ui green label">Green</a>\n' +
      '    <a class="ui teal label">Teal</a>\n' +
      '    <a class="ui blue label">Blue</a>\n' +
      '    <a class="ui violet label">Violet</a>\n' +
      '    <a class="ui purple label">Purple</a>\n' +
      '    <a class="ui pink label">Pink</a>\n' +
      '    <a class="ui brown label">Brown</a>\n' +
      '    <a class="ui grey label">Grey</a>\n' +
      '    <a class="ui black label">Black</a>\n',
    };
  },
};
</script>
