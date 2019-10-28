<template>
  <div>
      <div class="code" data-type="javascript">
        $('.ui.button')
          .on('click', function() {
            // programmatically activating tab
            $.tab('change tab', 'tab-name');
          })
        ;
      </div>
      <div class="code" data-type="html">
        <div class="ui button">Activate Tab</div>
        <div class="ui tab" data-tab="tab-name">
          <!-- Tab Content !-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabwithoutMenus1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Initializing Tabs',
    title2: '...without Menus',
    description: 'If there are no menus that activate tab elements on the page, tabs can be initialized globally by using',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.ui.button\')\n' +
      '          .on(\'click\', function() {\n' +
      '            // programmatically activating tab\n' +
      '            $.tab(\'change tab\', \'tab-name\');\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui button">Activate Tab</div>\n' +
      '        <div class="ui tab" data-tab="tab-name">\n' +
      '          <!-- Tab Content !-->\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
