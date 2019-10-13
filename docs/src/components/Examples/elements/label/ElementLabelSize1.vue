<template>
  <div>
    <div class="ui mini label">
      Mini
    </div>
    <div class="ui tiny label">
      Tiny
    </div>
    <div class="ui small label">
      Small
    </div>
    <div class="ui label">
      Medium
    </div>
    <div class="ui large label">
      Large
    </div>
    <div class="ui big label">
      Big
    </div>
    <div class="ui huge label">
      Huge
    </div>
    <div class="ui massive label">
      Massive
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelSize1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Variations',
      title2: 'Size',
      description: 'A label can be small or large',
      model: '    <div class="ui mini label">\n' +
      '      Mini\n' +
      '    </div>\n' +
      '    <div class="ui tiny label">\n' +
      '      Tiny\n' +
      '    </div>\n' +
      '    <div class="ui small label">\n' +
      '      Small\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      Medium\n' +
      '    </div>\n' +
      '    <div class="ui large label">\n' +
      '      Large\n' +
      '    </div>\n' +
      '    <div class="ui big label">\n' +
      '      Big\n' +
      '    </div>\n' +
      '    <div class="ui huge label">\n' +
      '      Huge\n' +
      '    </div>\n' +
      '    <div class="ui massive label">\n' +
      '      Massive\n' +
      '    </div>\n',
    };
  },
};
</script>
