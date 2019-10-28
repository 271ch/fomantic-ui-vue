<template>
  <div>
      <div class="ui warning message">You may need to manually set the z-index on elements to ensure the intended sidebar element appears on top.</div>
      <div class="ui info message">
        If you are triggering multiple sidebars at the same time, its recommended to set the transition to overlay.
      </div>
      <div class="code" data-demo="true" data-type="javascript">
      // showing multiple
      $('.demo.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle')
      ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarDisplayingMultiple1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Examples',
    title2: 'Displaying Multiple',
    description: 'Multiple sidebars can be displayed at the same time only when using a supported animation like',
    model: '      <div class="ui warning message">You may need to manually set the z-index on elements to ensure the intended sidebar element appears on top.</div>\n' +
      '      <div class="ui info message">\n' +
      '        If you are triggering multiple sidebars at the same time, its recommended to set the transition to overlay.\n' +
      '      </div>\n' +
      '      <div class="code" data-demo="true" data-type="javascript">\n' +
      '      // showing multiple\n' +
      '      $(\'.demo.sidebar\')\n' +
      '        .sidebar(\'setting\', \'transition\', \'overlay\')\n' +
      '        .sidebar(\'toggle\')\n' +
      '      ;\n' +
      '      </div>\n',
  },
};
</script>
