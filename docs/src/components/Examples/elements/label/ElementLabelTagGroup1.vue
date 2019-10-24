<template>
  <div>
    <FuiLabels tagged>
      <FuiLabel tag=a>
        $10.00
      </FuiLabel>
      <FuiLabel tag=a>
        $19.99
      </FuiLabel>
      <FuiLabel tag=a>
        $24.99
      </FuiLabel>
      <FuiLabel tag=a>
        $30.99
      </FuiLabel>
      <FuiLabel tag=a>
        $10.25
      </FuiLabel>
    </FuiLabels>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelTagGroup1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Groups',
    title2: 'Tag Group',
    description: 'Labels can share tag formatting',
    model: '    <div class="ui tag labels">\n' +
      '      <a class="ui label">\n' +
      '        $10.00\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        $19.99\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        $24.99\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        $30.99\n' +
      '      </a>\n' +
      '      <a class="ui label">\n' +
      '        $10.25\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
