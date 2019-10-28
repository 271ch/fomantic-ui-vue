<template>
  <div>
      <div class="ui ignored warning message">
        <p>Although sidebars can be used with any content, in most cases, sidebars are used with <a href="/collections/menu.html#vertical"><code>inverted vertical menu</code></a>. Please see the <a href="#/usage">usage tab</a> for more details.</p>
      </div>
      <div class="code" data-type="html" data-escape="true">
        &lt;body&gt;
          &lt;div class="ui sidebar inverted vertical menu"&gt;
            &lt;a class="item"&gt;
              1
            &lt;/a&gt;
            &lt;a class="item"&gt;
              2
            &lt;/a&gt;
            &lt;a class="item"&gt;
              3
            &lt;/a&gt;
          &lt;/div&gt;
          &lt;div class="pusher"&gt;
            &lt;!-- Site content !--&gt;
          &lt;/div&gt;
        &lt;/body&gt;
      </div>
      <div class="code" data-demo="true" data-type="javascript" data-eval="$('.simple.sidebar').sidebar('toggle');">
      $('.ui.sidebar')
        .sidebar('toggle')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarSidebar1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Types',
    title2: 'Sidebar',
    description: 'A sidebar',
    model: '      <div class="ui ignored warning message">\n' +
      '        <p>Although sidebars can be used with any content, in most cases, sidebars are used with <a href="/collections/menu.html#vertical"><code>inverted vertical menu</code></a>. Please see the <a href="#/usage">usage tab</a> for more details.</p>\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-escape="true">\n' +
      '        &lt;body&gt;\n' +
      '          &lt;div class="ui sidebar inverted vertical menu"&gt;\n' +
      '            &lt;a class="item"&gt;\n' +
      '              1\n' +
      '            &lt;/a&gt;\n' +
      '            &lt;a class="item"&gt;\n' +
      '              2\n' +
      '            &lt;/a&gt;\n' +
      '            &lt;a class="item"&gt;\n' +
      '              3\n' +
      '            &lt;/a&gt;\n' +
      '          &lt;/div&gt;\n' +
      '          &lt;div class="pusher"&gt;\n' +
      '            &lt;!-- Site content !--&gt;\n' +
      '          &lt;/div&gt;\n' +
      '        &lt;/body&gt;\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-type="javascript" data-eval="$(\'.simple.sidebar\').sidebar(\'toggle\');">\n' +
      '      $(\'.ui.sidebar\')\n' +
      '        .sidebar(\'toggle\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
