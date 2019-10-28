<template>
  <div>
      <div class="code" data-type="javascript" data-demo="true">
        $('.custom.example .ui.embed').embed({
          source      : 'youtube',
          id          : 'O6Xo21L0ybE',
          placeholder : '/images/bear-waving.jpg'
        });
      </div>
      <div class="code" data-type="html" data-preview="true">
        <div class="ui embed"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleEmbedSpecifyingProgrammatically1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'embed',
    title1: 'Initializing',
    title2: 'Specifying Programmatically',
    description: 'You can also specify embed settings at run-time in the settings object.',
    model: '      <div class="code" data-type="javascript" data-demo="true">\n' +
      '        $(\'.custom.example .ui.embed\').embed({\n' +
      '          source      : \'youtube\',\n' +
      '          id          : \'O6Xo21L0ybE\',\n' +
      '          placeholder : \'/images/bear-waving.jpg\'\n' +
      '        });\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-preview="true">\n' +
      '        <div class="ui embed"/>\n' +
      '      </div>\n',
  },
};
</script>
