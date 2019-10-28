<template>
  <div>
      <div class="code" data-type="javascript">
        $('.tabular.menu .item').tab();
      </div>
      <div class="code" data-type="html">
        <div class="ui tabular menu">
          <div class="item" data-tab="tab-name">Tab Name</div>
          <div class="item" data-tab="tab-name2">Tab Name 2</div>
        </div>
        <div class="ui tab" data-tab="tab-name">
          <!-- Tab Content !-->
        </div>
        <div class="ui tab" data-tab="tab-name2">
          <!-- Tab Content !-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTabwithMenus1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Initializing Tabs',
    title2: '...with Menus',
    description: '???',
    model: '      <div class="code" data-type="javascript">\n' +
      '        $(\'.tabular.menu .item\').tab();\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui tabular menu">\n' +
      '          <div class="item" data-tab="tab-name">Tab Name</div>\n' +
      '          <div class="item" data-tab="tab-name2">Tab Name 2</div>\n' +
      '        </div>\n' +
      '        <div class="ui tab" data-tab="tab-name">\n' +
      '          <!-- Tab Content !-->\n' +
      '        </div>\n' +
      '        <div class="ui tab" data-tab="tab-name2">\n' +
      '          <!-- Tab Content !-->\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
