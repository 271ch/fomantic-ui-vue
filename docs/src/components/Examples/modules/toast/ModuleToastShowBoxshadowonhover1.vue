<template>
  <div>
        <div class="code" data-demo="true">
        $('body')
          .toast({
            message: 'I got my style from the message class',
            class : 'brown',
            className: {
                toast: 'ui hoverfloating message'
            }
          })
        ;
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleToastShowBoxshadowonhover1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'toast',
    title1: 'Examples',
    title2: 'Show Boxshadow on hover',
    description: 'Change the components className to get additional styles',
    model: '        <div class="code" data-demo="true">\n' +
      '        $(\'body\')\n' +
      '          .toast({\n' +
      '            message: \'I got my style from the message class\',\n' +
      '            class : \'brown\',\n' +
      '            className: {\n' +
      '                toast: \'ui hoverfloating message\'\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '        </div>\n',
  },
};
</script>
