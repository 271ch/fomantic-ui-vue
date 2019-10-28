<template>
  <div>
      <div class="code" data-demo="true">
      $('body')
        .toast({
          class: 'info',
          showIcon: 'microphone',
          message: 'Listen to me'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastIndividualicon1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Examples',
    title2: 'Individual icon',
    description: 'Use whatever you like from the included FontAwesome gallery',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'body\')\n' +
      '        .toast({\n' +
      '          class: \'info\',\n' +
      '          showIcon: \'microphone\',\n' +
      '          message: \'Listen to me\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
