<template>
  <div>
      <div class="code" data-type="html" data-escape="true">
        &lt;div class="ui left demo vertical inverted sidebar labeled icon menu"&gt;
          &lt;a class="item"&gt;
            &lt;i class="home icon"&gt;&lt;/i&gt;
            Home
          &lt;/a&gt;
          &lt;a class="item"&gt;
            &lt;i class="block layout icon"&gt;&lt;/i&gt;
            Topics
          &lt;/a&gt;
          &lt;a class="item"&gt;
            &lt;i class="smile icon"&gt;&lt;/i&gt;
            Friends
          &lt;/a&gt;
        &lt;/div&gt;
      </div>
      <div class="code" data-demo="true" data-type="javascript" data-eval="$('.left.demo.sidebar').sidebar('toggle');">
      $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarSidebar2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Types',
    title2: 'Sidebar',
    description: 'A sidebar',
    model: '      <div class="code" data-type="html" data-escape="true">\n' +
      '        &lt;div class="ui left demo vertical inverted sidebar labeled icon menu"&gt;\n' +
      '          &lt;a class="item"&gt;\n' +
      '            &lt;i class="home icon"&gt;&lt;/i&gt;\n' +
      '            Home\n' +
      '          &lt;/a&gt;\n' +
      '          &lt;a class="item"&gt;\n' +
      '            &lt;i class="block layout icon"&gt;&lt;/i&gt;\n' +
      '            Topics\n' +
      '          &lt;/a&gt;\n' +
      '          &lt;a class="item"&gt;\n' +
      '            &lt;i class="smile icon"&gt;&lt;/i&gt;\n' +
      '            Friends\n' +
      '          &lt;/a&gt;\n' +
      '        &lt;/div&gt;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-type="javascript" data-eval="$(\'.left.demo.sidebar\').sidebar(\'toggle\');">\n' +
      '      $(\'.ui.labeled.icon.sidebar\')\n' +
      '        .sidebar(\'toggle\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
