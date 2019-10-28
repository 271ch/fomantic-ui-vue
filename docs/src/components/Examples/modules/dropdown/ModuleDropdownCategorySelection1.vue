<template>
  <div>
      <div class="ui ignored code" data-type="javascript">
        $('.category.example .ui.dropdown')
          .dropdown({
            allowCategorySelection: true
          })
        ;
      </div>
      <div class="ui dropdown button">
        <span class="text">Choose Category</span>
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">
            <span class="text">Category 1</span>
          </div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Category 2</span>
            <div class="menu">
              <div class="item">Item 2A</div>
              <div class="item">Item 2B</div>
              <div class="item">Item 2C</div>
            </div>
          </div>
          <div class="item">
            <i class="dropdown icon"/>
            <span class="text">Category 3</span>
            <div class="menu">
              <div class="item">Item 3A</div>
              <div class="item">Item 3B</div>
              <div class="item">Item 3C</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownCategorySelection1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Menus',
    title2: 'Category Selection',
    description: 'Using a multi-level menu with',
    model: '      <div class="ui ignored code" data-type="javascript">\n' +
      '        $(\'.category.example .ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            allowCategorySelection: true\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="ui dropdown button">\n' +
      '        <span class="text">Choose Category</span>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <span class="text">Category 1</span>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Category 2</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Item 2A</div>\n' +
      '              <div class="item">Item 2B</div>\n' +
      '              <div class="item">Item 2C</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <span class="text">Category 3</span>\n' +
      '            <div class="menu">\n' +
      '              <div class="item">Item 3A</div>\n' +
      '              <div class="item">Item 3B</div>\n' +
      '              <div class="item">Item 3C</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
