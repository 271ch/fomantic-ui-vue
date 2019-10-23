<template>
  <div>
    <FuiInput labeled placeholder="mysite.com">
      <template #before>
        <FuiLabel>
          http://
        </FuiLabel>
      </template>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled1',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui labeled input">\n' +
      '      <div class="ui label">\n' +
      '        http://\n' +
      '      </div>\n' +
      '      <input type="text" placeholder="mysite.com">\n' +
      '    </div>\n',
  },
};
</script>
