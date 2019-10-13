<template>
  <div>
    <a class="ui red circular label">2</a>
    <a class="ui orange circular label">2</a>
    <a class="ui yellow circular label">2</a>
    <a class="ui olive circular label">2</a>
    <a class="ui green circular label">2</a>
    <a class="ui teal circular label">2</a>
    <a class="ui blue circular label">2</a>
    <a class="ui violet circular label">2</a>
    <a class="ui purple circular label">2</a>
    <a class="ui pink circular label">2</a>
    <a class="ui brown circular label">2</a>
    <a class="ui grey circular label">2</a>
    <a class="ui black circular label">2</a>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelCircular1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Variations',
      title2: 'Circular',
      description: 'A label can be circular',
      model: '    <a class="ui red circular label">2</a>\n' +
      '    <a class="ui orange circular label">2</a>\n' +
      '    <a class="ui yellow circular label">2</a>\n' +
      '    <a class="ui olive circular label">2</a>\n' +
      '    <a class="ui green circular label">2</a>\n' +
      '    <a class="ui teal circular label">2</a>\n' +
      '    <a class="ui blue circular label">2</a>\n' +
      '    <a class="ui violet circular label">2</a>\n' +
      '    <a class="ui purple circular label">2</a>\n' +
      '    <a class="ui pink circular label">2</a>\n' +
      '    <a class="ui brown circular label">2</a>\n' +
      '    <a class="ui grey circular label">2</a>\n' +
      '    <a class="ui black circular label">2</a>\n',
    };
  },
};
</script>
