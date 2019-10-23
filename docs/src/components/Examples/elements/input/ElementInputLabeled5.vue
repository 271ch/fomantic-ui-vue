<template>
  <div>
    <FuiInput labeled=right icon=left placeholder="Enter tags">
      <template #before>
        <FuiIcon name=tags></FuiIcon>
      </template>
      <FuiLabel tag=a tagged>
        Add Tag
      </FuiLabel>
    </FuiInput>
  </div>
</template>

<script>
export default {
  name: 'ElementInputLabeled5',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'input',
    title1: 'Variations',
    title2: 'Labeled',
    description: 'An input can be formatted with a label',
    model: '    <div class="ui left icon right labeled input">\n' +
      '      <i class="tags icon"></i>\n' +
      '      <input type="text" placeholder="Enter tags">\n' +
      '      <a class="ui tag label">\n' +
      '        Add Tag\n' +
      '      </a>\n' +
      '    </div>\n',
  },
};
</script>
