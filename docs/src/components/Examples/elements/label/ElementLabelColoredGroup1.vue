<template>
  <div>
    <FuiLabels color=blue>
      <FuiLabel tag=a>
        Fun <i class="icon close"></i>
      </FuiLabel>
      <FuiLabel tag=a detail="22">
        Happy
      </FuiLabel>
      <FuiLabel tag=a>
        Smart
      </FuiLabel>
      <FuiLabel tag=a>
        Insane
      </FuiLabel>
      <FuiLabel tag=a>
        Exciting
      </FuiLabel>
    </FuiLabels>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelColoredGroup1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Groups',
    title2: 'Colored Group',
    description: 'Labels can share colors together',
    model: '    <div class="ui blue labels">\n' +
      '      <a class="ui label">\n' +
      '        Fun <i class="icon close"></i>\n' +
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
  },
};
</script>
