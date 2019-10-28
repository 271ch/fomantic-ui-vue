<template>
  <div>
      <div class="code" data-demo="true">
      $('.left.demo.sidebar').first()
        .sidebar('attach events', '.toggle.button')
      ;
      $('.toggle.button')
        .removeClass('disabled')
      ;
      </div>
      <div class="ui disabled secondary labeled icon toggle button">
        <i class="left arrow icon"/>
        Trigger Sidebar
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarTriggeringshowhidewithothercontent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Triggering show/hide with other content',
    description: 'For convenience calling attach events will allow you to bind events. By default this will toggle the sidebar in and out of view on click',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'.left.demo.sidebar\').first()\n' +
      '        .sidebar(\'attach events\', \'.toggle.button\')\n' +
      '      ;\n' +
      '      $(\'.toggle.button\')\n' +
      '        .removeClass(\'disabled\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui disabled secondary labeled icon toggle button">\n' +
      '        <i class="left arrow icon"/>\n' +
      '        Trigger Sidebar\n' +
      '      </div>\n',
  },
};
</script>
