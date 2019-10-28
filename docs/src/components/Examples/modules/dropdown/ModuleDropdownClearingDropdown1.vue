<template>
  <div>
      <div class="ui multiple selection dropdown">
        <input name="gender" type="hidden" value="0,1"/>
        <i class="dropdown icon"/>
        <div class="default text">Default</div>
        <div class="menu">
            <div class="item" data-value="0">Value</div>
            <div class="item" data-value="1">Another Value</div>
        </div>
       </div>
      <div class="ui selection dropdown">
        <input name="gender" type="hidden"/>
        <div class="default text">Select a value</div>
        <i class="dropdown icon"/>
        <div class="menu">
            <div class="item" data-value="0">Value</div>
            <div class="item" data-value="1">Another Value</div>
        </div>
       </div>
      <div class="ui button">
        Clear
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.clear.example .button')
          .on('click', function() {
            $('.clear.example .ui.dropdown')
              .dropdown('clear')
            ;
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownClearingDropdown1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Clearing Dropdown',
    description: 'You can reset a form field to its placeholder value',
    model: '      <div class="ui multiple selection dropdown">\n' +
      '        <input name="gender" type="hidden" value="0,1"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Default</div>\n' +
      '        <div class="menu">\n' +
      '            <div class="item" data-value="0">Value</div>\n' +
      '            <div class="item" data-value="1">Another Value</div>\n' +
      '        </div>\n' +
      '       </div>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input name="gender" type="hidden"/>\n' +
      '        <div class="default text">Select a value</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '            <div class="item" data-value="0">Value</div>\n' +
      '            <div class="item" data-value="1">Another Value</div>\n' +
      '        </div>\n' +
      '       </div>\n' +
      '      <div class="ui button">\n' +
      '        Clear\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.clear.example .button\')\n' +
      '          .on(\'click\', function() {\n' +
      '            $(\'.clear.example .ui.dropdown\')\n' +
      '              .dropdown(\'clear\')\n' +
      '            ;\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
