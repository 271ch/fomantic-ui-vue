<template>
  <div>
      <div class="code" data-demo="true">
      $('body')
        .toast({
          class: 'success',
          message: 'Did you notice any difference ?',
          transition: {
            showMethod   : 'zoom',
            showDuration : 1000,
            hideMethod   : 'fade',
            hideDuration : 1000
          }
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastTransitions1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Examples',
    title2: 'Transitions',
    description: 'You can set other transitions types and durations.',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'body\')\n' +
      '        .toast({\n' +
      '          class: \'success\',\n' +
      '          message: \'Did you notice any difference ?\',\n' +
      '          transition: {\n' +
      '            showMethod   : \'zoom\',\n' +
      '            showDuration : 1000,\n' +
      '            hideMethod   : \'fade\',\n' +
      '            hideDuration : 1000\n' +
      '          }\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
