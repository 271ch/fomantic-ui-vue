<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            title: 'Better ?',
            message: 'Hey look, I have a title !'
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastTitled1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Types',
    title2: 'Titled',
    description: 'You can add a title to your toast.',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            title: \'Better ?\',\n' +
      '            message: \'Hey look, I have a title !\'\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
