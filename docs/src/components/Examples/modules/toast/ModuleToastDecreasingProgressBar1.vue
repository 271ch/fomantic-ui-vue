<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            title: 'LOOK',
            message: 'See, how long i will last',
            showProgress: 'top',
            progressUp: false
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastDecreasingProgressBar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Variations',
    title2: 'Decreasing ProgressBar',
    description: 'The progressbar could be be lowered instead of raised',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            title: \'LOOK\',\n' +
      '            message: \'See, how long i will last\',\n' +
      '            showProgress: \'top\',\n' +
      '            progressUp: false\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
