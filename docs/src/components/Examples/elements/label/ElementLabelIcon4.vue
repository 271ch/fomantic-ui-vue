<template>
  <div>
    <FuiLabel icon=left>
      <FuiIcon name=close></FuiIcon>
      Close
    </FuiLabel>
    <FuiLabel icon=left>
      <FuiIcon name=delete></FuiIcon>
      Delete
    </FuiLabel>
    <FuiLabel>
      Close
      <FuiIcon name=close></FuiIcon>
    </FuiLabel>
    <FuiLabel>
      Delete
      <FuiIcon name=delete></FuiIcon>
    </FuiLabel>
  </div>
</template>

<script>
export default {
  name: 'ElementLabelIcon4',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'label',
    title1: 'Content',
    title2: 'Icon',
    description: 'A label can include an icon',
    model: '    <div class="ui left icon label">\n' +
      '      <i class="close icon"></i>\n' +
      '      Close\n' +
      '    </div>\n' +
      '    <div class="ui left icon label">\n' +
      '      <i class="delete icon"></i>\n' +
      '      Delete\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      Close\n' +
      '      <i class="close icon"></i>\n' +
      '    </div>\n' +
      '    <div class="ui label">\n' +
      '      Delete\n' +
      '      <i class="delete icon"></i>\n' +
      '    </div>\n',
  },
};
</script>
