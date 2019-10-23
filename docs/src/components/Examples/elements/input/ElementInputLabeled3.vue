<template>
  <div>
    <FuiInput labeled=right placeholder="Enter weight..">
      <FuiLabel basic>
        kg
      </FuiLabel>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled3',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui right labeled input">\n' +
      '      <input type="text" placeholder="Enter weight..">\n' +
      '      <div class="ui basic label">\n' +
      '        kg\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
