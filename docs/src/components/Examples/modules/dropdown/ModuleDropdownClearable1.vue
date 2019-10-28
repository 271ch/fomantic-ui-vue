<template>
  <div>
      <div class="ui fluid search selection dropdown">
        <input type="hidden" name="country"/>
        <div class="default text">Select Country</div>
        <i class="dropdown icon"/>
      </div>
      <div class="ui divider"/>
      <div class="ui secondary segment">
        Show me
        <div class="ui inline scrolling dropdown">
          <input type="hidden" name="skill" value="css"/>
          <div class="text">css</div>
          <i class="dropdown icon"/>
          <div class="menu">
          </div>
        </div>
        classes currently available.
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.clearable.example .ui.selection.dropdown')
          .dropdown({
            clearable: true
          })
        ;
        $('.clearable.example .ui.inline.dropdown')
          .dropdown({
            clearable: true,
            placeholder: 'any'
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownClearable1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Clearable',
    description: 'Using the clearable setting will let users remove their selection from a dropdown.',
    model: '      <div class="ui fluid search selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '      </div>\n' +
      '      <div class="ui divider"/>\n' +
      '      <div class="ui secondary segment">\n' +
      '        Show me\n' +
      '        <div class="ui inline scrolling dropdown">\n' +
      '          <input type="hidden" name="skill" value="css"/>\n' +
      '          <div class="text">css</div>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '          </div>\n' +
      '        </div>\n' +
      '        classes currently available.\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.clearable.example .ui.selection.dropdown\')\n' +
      '          .dropdown({\n' +
      '            clearable: true\n' +
      '          })\n' +
      '        ;\n' +
      '        $(\'.clearable.example .ui.inline.dropdown\')\n' +
      '          .dropdown({\n' +
      '            clearable: true,\n' +
      '            placeholder: \'any\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
