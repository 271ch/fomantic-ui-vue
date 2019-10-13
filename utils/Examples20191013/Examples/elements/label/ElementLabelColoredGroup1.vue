<template>
  <div>
    <div class="ui blue labels">
      <a class="ui label">
        Fun <i class="icon close"/>
      </a>
      <a class="ui label">
        Happy
        <div class="detail">22</div>
      </a>
      <a class="ui label">
        Smart
      </a>
      <a class="ui label">
        Insane
      </a>
      <a class="ui label">
        Exciting
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelColoredGroup1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'label',
      title1: 'Groups',
      title2: 'Colored Group',
      description: 'Labels can share colors together',
      model: '    <div class="ui blue labels">\n' +
      '      <a class="ui label">\n' +
      '        Fun <i class="icon close"/>\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        Happy\n' +
      '        <div class="detail">22</div>\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        Smart\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        Insane\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        Exciting\n' +
      '      </a>\n' +
      '    </div>\n',
    };
  },
};
</script>
