<template>
  <div>
      <h3 class="ui header">...with automatic routing</h3>
      <div class="ignored ui info message">There are a variety of settings for configuring dynamic content behavior. Visit the tab settings section for more information</div>
      <div class="code" data-type="javascript">
      $('.dynamic.example .menu .item')
        .tab({
          context : '.dynamic.example',
          auto    : true,
          path    : '/modules/tab.html'
        })
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTab1A',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'AJAX Content',
    title2: '???',
    description: '???',
    model: '      <h3 class="ui header">...with automatic routing</h3>\n' +
      '      <div class="ignored ui info message">There are a variety of settings for configuring dynamic content behavior. Visit the tab settings section for more information</div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'.dynamic.example .menu .item\')\n' +
      '        .tab({\n' +
      '          context : \'.dynamic.example\',\n' +
      '          auto    : true,\n' +
      '          path    : \'/modules/tab.html\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
