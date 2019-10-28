<template>
  <div>
      <div class="ignored">
        <p>A <a href="/elements/button.html">button</a> can be formatted with a dropdown.</p>
        <p>Using the <code>combo</code> action will change the preceding element to the selected value.</p>
      </div>
      <div class="evaluated code" data-type="javascript">
      $('.combo.dropdown')
        .dropdown({
          action: 'combo'
        })
      ;
      </div>
      <div class="ui teal buttons">
        <div class="ui button">Save</div>
        <div class="ui combo top right pointing dropdown icon button">
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item"><i class="edit icon"/> Edit</div>
            <div class="item"><i class="delete icon"/> Delete</div>
            <div class="item"><i class="hide icon"/> Hide</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownComboDropdowns1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Adjusting Actions',
    title2: 'Combo Dropdowns',
    description: '???',
    model: '      <div class="ignored">\n' +
      '        <p>A <a href="/elements/button.html">button</a> can be formatted with a dropdown.</p>\n' +
      '        <p>Using the <code>combo</code> action will change the preceding element to the selected value.</p>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '      $(\'.combo.dropdown\')\n' +
      '        .dropdown({\n' +
      '          action: \'combo\'\n' +
      '        })\n' +
      '      ;\n' +
      '      </div>\n' +
      '      <div class="ui teal buttons">\n' +
      '        <div class="ui button">Save</div>\n' +
      '        <div class="ui combo top right pointing dropdown icon button">\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item"><i class="edit icon"/> Edit</div>\n' +
      '            <div class="item"><i class="delete icon"/> Delete</div>\n' +
      '            <div class="item"><i class="hide icon"/> Hide</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
