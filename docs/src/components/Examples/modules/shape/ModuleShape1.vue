<template>
  <div>
      <div class="code">
      $('.your.element')
        .shape('behavior name', argumentOne, argumentTwo)
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleShape1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'shape',
    title1: 'Behavior',
    title2: '???',
    description: 'All the following behaviors can be called using the syntax:',
    model: '      <div class="code">\n' +
      '      $(\'.your.element\')\n' +
      '        .shape(\'behavior name\', argumentOne, argumentTwo)\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
