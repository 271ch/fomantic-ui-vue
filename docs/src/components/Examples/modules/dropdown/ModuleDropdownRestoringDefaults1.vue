<template>
  <div>
      <div class="ui multiple selection dropdown">
        <input name="gender" type="hidden" value="default,default2"/>
        <i class="dropdown icon"/>
        <div class="default text">Default</div>
        <div class="menu">
            <div class="item" data-value="0">Value</div>
            <div class="item" data-value="1">Another Value</div>
            <div class="item" data-value="default">Default Value</div>
            <div class="item" data-value="default2">Second Default</div>
        </div>
      </div>
      <div class="ui divider"/>
      <div class="ui selection dropdown">
        <input name="gender" type="hidden" value="default"/>
        <i class="dropdown icon"/>
        <div class="default text">Select a value</div>
        <div class="menu">
            <div class="item" data-value="0">Value</div>
            <div class="item" data-value="1">Another Value</div>
        </div>
       </div>
      <div class="ui divider"/>
      <div class="ui selection dropdown">
        <input name="gender" type="hidden" value="default"/>
        <i class="dropdown icon"/>
        <div class="text">Default Value</div>
        <div class="menu">
            <div class="item" data-value="0">Value</div>
            <div class="item" data-value="1">Another Value</div>
            <div class="item" data-value="default">Default Value</div>
        </div>
       </div>
      <div class="ui divider"/>
      <div class="ui primary button">
          Restore All Dropdowns
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.restore.example .button')
          .on('click', function() {
            $('.restore.example .ui.dropdown')
              .dropdown('restore defaults')
            ;
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownRestoringDefaults1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Restoring Defaults',
    description: 'You can restore a dropdown to its value set on page load using the',
    model: '      <div class="ui multiple selection dropdown">\n' +
      '        <input name="gender" type="hidden" value="default,default2"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Default</div>\n' +
      '        <div class="menu">\n' +
      '            <div class="item" data-value="0">Value</div>\n' +
      '            <div class="item" data-value="1">Another Value</div>\n' +
      '            <div class="item" data-value="default">Default Value</div>\n' +
      '            <div class="item" data-value="default2">Second Default</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input name="gender" type="hidden" value="default"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select a value</div>\n' +
      '        <div class="menu">\n' +
      '            <div class="item" data-value="0">Value</div>\n' +
      '            <div class="item" data-value="1">Another Value</div>\n' +
      '        </div>\n' +
      '       </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui selection dropdown">\n' +
      '        <input name="gender" type="hidden" value="default"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="text">Default Value</div>\n' +
      '        <div class="menu">\n' +
      '            <div class="item" data-value="0">Value</div>\n' +
      '            <div class="item" data-value="1">Another Value</div>\n' +
      '            <div class="item" data-value="default">Default Value</div>\n' +
      '        </div>\n' +
      '       </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui primary button">\n' +
      '          Restore All Dropdowns\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.restore.example .button\')\n' +
      '          .on(\'click\', function() {\n' +
      '            $(\'.restore.example .ui.dropdown\')\n' +
      '              .dropdown(\'restore defaults\')\n' +
      '            ;\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
