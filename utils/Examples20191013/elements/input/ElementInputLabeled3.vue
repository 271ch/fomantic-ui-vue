<template>
  <div>
    <div class="ui right labeled input">
      <input type="text" placeholder="Enter weight.."/>
      <div class="ui basic label">
        kg
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled3',
  info: {
    converted: false,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui right labeled input">\n' +
      '      <input type="text" placeholder="Enter weight.."/>\n' +
      '      <div class="ui basic label">\n' +
      '        kg\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
