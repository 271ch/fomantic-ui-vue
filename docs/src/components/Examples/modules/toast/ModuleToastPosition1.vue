<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            position: 'bottom right',
            message: `It's pretty cold down there...`
          })
        ;
        </div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            position: 'top left',
            message: `Look, I'm here !`
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastPosition1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Position',
    description: 'A toast can appear in different positions on the screen.',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            position: \'bottom right\',\n' +
      '            message: `It\'s pretty cold down there...`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            position: \'top left\',\n' +
      '            message: `Look, I\'m here !`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
