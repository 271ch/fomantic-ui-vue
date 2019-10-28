<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            title: 'Awesome',
            message: 'I got my style from the message class',
            class : 'purple',
            className: {
                toast: 'ui message'
            }
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastUseMessageStyle1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Use Message Style',
    description: 'You can use all of the styles and colors from the message component',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            title: \'Awesome\',\n' +
      '            message: \'I got my style from the message class\',\n' +
      '            class : \'purple\',\n' +
      '            className: {\n' +
      '                toast: \'ui message\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
