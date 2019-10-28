<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            message: 'I am a toast, nice to meet you !'
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastMinimal1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Types',
    title2: 'Minimal',
    description: 'A minimal toast will just display a message.',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            message: \'I am a toast, nice to meet you !\'\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
