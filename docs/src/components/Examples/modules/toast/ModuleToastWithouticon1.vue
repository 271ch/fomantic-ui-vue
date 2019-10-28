<template>
  <div>
      <div class="code" data-demo="true">
      $('body')
        .toast({
          class: 'warning',
          showIcon: false,
          message: 'Hey, where is my icon ?'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastWithouticon1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Examples',
    title2: 'Without icon',
    description: 'You can choose to hide the status icon.',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'body\')\n' +
      '        .toast({\n' +
      '          class: \'warning\',\n' +
      '          showIcon: false,\n' +
      '          message: \'Hey, where is my icon ?\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
