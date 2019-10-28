<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            displayTime: 5000,
            message: `You will see me for 5 seconds.`
          })
        ;
        </div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            displayTime: 0,
            message: `I'll stay here until you click on me !`
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastDuration1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Duration',
    description: '???',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            displayTime: 5000,\n' +
      '            message: `You will see me for 5 seconds.`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            displayTime: 0,\n' +
      '            message: `I\'ll stay here until you click on me !`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
