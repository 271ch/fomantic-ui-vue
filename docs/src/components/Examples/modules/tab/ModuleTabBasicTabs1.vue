<template>
  <div>
      <div class="ui ignored info message">
        To have a tab visible on page load, add the class <code>active</code> to both the initializing menu and the tab.
      </div>
      <div class="ui top attached tabular menu">
        <a class="active item" data-tab="first">First</a>
        <a class="item" data-tab="second">Second</a>
        <a class="item" data-tab="third">Third</a>
      </div>
      <div class="ui bottom attached active tab segment" data-tab="first">
        First
      </div>
      <div class="ui bottom attached tab segment" data-tab="second">
        Second
      </div>
      <div class="ui bottom attached tab segment" data-tab="third">
        Third
      </div>
      <div class="code" data-type="javascript">
      $('.menu .item')
        .tab()
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabBasicTabs1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Basic Examples',
    title2: 'Basic Tabs',
    description: 'Tabs are connecting using paths specified in the',
    model: '      <div class="ui ignored info message">\n' +
      '        To have a tab visible on page load, add the class <code>active</code> to both the initializing menu and the tab.\n' +
      '      </div>\n' +
      '      <div class="ui top attached tabular menu">\n' +
      '        <a class="active item" data-tab="first">First</a>\n' +
      '        <a class="item" data-tab="second">Second</a>\n' +
      '        <a class="item" data-tab="third">Third</a>\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached active tab segment" data-tab="first">\n' +
      '        First\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached tab segment" data-tab="second">\n' +
      '        Second\n' +
      '      </div>\n' +
      '      <div class="ui bottom attached tab segment" data-tab="third">\n' +
      '        Third\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript">\n' +
      '      $(\'.menu .item\')\n' +
      '        .tab()\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
