<template>
  <div>
      <div class="ui warning message">
        <p>Tabs use Asual's <a href="https://github.com/asual/jquery-address">Address library</a> to provide cross-browser push state support. This is a <b>required dependency</b> for tabs with history to work correctly.</p>
      </div>
      <div class="code">
        $('.ui.menu .item')
          .tab({
            history: true,
            historyType: 'hash'
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabwithHashTags1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Managing State',
    title2: '...with Hash Tags',
    description: 'Hash tags use in page links and',
    model: '      <div class="ui warning message">\n' +
      '        <p>Tabs use Asual\'s <a href="https://github.com/asual/jquery-address">Address library</a> to provide cross-browser push state support. This is a <b>required dependency</b> for tabs with history to work correctly.</p>\n' +
      '      </div>\n' +
      '      <div class="code">\n' +
      '        $(\'.ui.menu .item\')\n' +
      '          .tab({\n' +
      '            history: true,\n' +
      '            historyType: \'hash\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
