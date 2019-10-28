<template>
  <div>
      <div class="code" data-demo="true">
      $('.left.demo.sidebar').first()
        .sidebar('attach events', '.open.button', 'show')
      ;
      $('.open.button')
        .removeClass('disabled')
      ;
      </div>
      <div class="ui disabled secondary labeled icon open button">
        <i class="left arrow icon"/>
        Open Sidebar
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarTriggeringcustombehaviorwithothercontent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Triggering custom behavior with other content',
    description: 'You can also specify what behavior should occur when the element is clicked',
    model: '      <div class="code" data-demo="true">\n' +
      '      $(\'.left.demo.sidebar\').first()\n' +
      '        .sidebar(\'attach events\', \'.open.button\', \'show\')\n' +
      '      ;\n' +
      '      $(\'.open.button\')\n' +
      '        .removeClass(\'disabled\')\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui disabled secondary labeled icon open button">\n' +
      '        <i class="left arrow icon"/>\n' +
      '        Open Sidebar\n' +
      '      </div>\n',
  },
};
</script>
