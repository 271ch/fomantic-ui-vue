<template>
  <div>
      <div class="ui sub header">Selection</div>
      <select multiple="multiple" name="skills" class="ui fluid normal dropdown">
      </select>
      <div class="ui sub header">Search Selection</div>
      <div class="ui fluid multiple search normal selection dropdown">
        <input type="hidden" name="country"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Country</div>
      </div>
      <div class="ui sub header">Without Labels</div>
      <div class="ui fluid multiple search special selection dropdown">
        <input type="hidden" name="country"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Country</div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.max.example .ui.normal.dropdown')
          .dropdown({
            maxSelections: 3
          })
        ;
        $('.max.example .ui.special.dropdown')
          .dropdown({
            useLabels: false,
            maxSelections: 3
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMaximumSelections1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Maximum Selections',
    description: 'Using',
    model: '      <div class="ui sub header">Selection</div>\n' +
      '      <select multiple="multiple" name="skills" class="ui fluid normal dropdown">\n' +
      '      </select>\n' +
      '      <div class="ui sub header">Search Selection</div>\n' +
      '      <div class="ui fluid multiple search normal selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '      </div>\n' +
      '      <div class="ui sub header">Without Labels</div>\n' +
      '      <div class="ui fluid multiple search special selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.max.example .ui.normal.dropdown\')\n' +
      '          .dropdown({\n' +
      '            maxSelections: 3\n' +
      '          })\n' +
      '        ;\n' +
      '        $(\'.max.example .ui.special.dropdown\')\n' +
      '          .dropdown({\n' +
      '            useLabels: false,\n' +
      '            maxSelections: 3\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
