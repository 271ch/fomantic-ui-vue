<template>
  <div>
    <FuiLabels basic>
      <FuiLabel tag=a>
        Fun <FuiIcon name=close></FuiIcon>
      </FuiLabel>
      <FuiLabel tag=a>
        Happy
        <div class="detail">22</div>
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
  name: 'ElementLabelBasicGroup1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Groups',
    title2: 'Basic Group',
    description: 'Labels can share their style together',
    model: '    <div class="ui basic labels">\n' +
      '        <a class="ui label">\n' +
      '            Fun <i class="close icon"></i>\n' +
      '        </a>\n' +
      '        <a class="ui label">\n' +
      '            Happy\n' +
      '            <div class="detail">22</div>\n' +
      '        </a>\n' +
      '        <a class="ui label">\n' +
      '            Smart\n' +
      '        </a>\n' +
      '        <a class="ui label">\n' +
      '            Insane\n' +
      '        </a>\n' +
      '        <a class="ui label">\n' +
      '            Exciting\n' +
      '        </a>\n' +
      '    </div>\n',
  },
};
</script>
