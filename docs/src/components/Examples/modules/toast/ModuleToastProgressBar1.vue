<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            title: 'LOOK',
            message: 'See, how long i will last',
            showProgress: 'bottom'
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastProgressBar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Types',
    title2: 'ProgressBar',
    description: 'You can attach a progressbar to your toast.',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            title: \'LOOK\',\n' +
      '            message: \'See, how long i will last\',\n' +
      '            showProgress: \'bottom\'\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
