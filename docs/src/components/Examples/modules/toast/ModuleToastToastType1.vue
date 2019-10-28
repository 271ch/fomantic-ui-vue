<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            class: 'success',
            message: `You're using the good framework !`
          })
        ;
        </div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            class: 'error',
            message: `An error occured !`
          })
        ;
        </div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            class: 'warning',
            message: `Behind you !`
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastToastType1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Toast Type',
    description: 'A toast can be used to display different types of informations.',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            class: \'success\',\n' +
      '            message: `You\'re using the good framework !`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            class: \'error\',\n' +
      '            message: `An error occured !`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n' +
      '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            class: \'warning\',\n' +
      '            message: `Behind you !`\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
