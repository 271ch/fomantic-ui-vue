<template>
  <div>
      <div class="ui ignored info message">
        You can customize any of the messages displayed by adjusting templates in <code>settings.message</code>
      </div>
      <select multiple="multiple" name="binary" class="ui fluid dropdown">
        <option value="">Select Tag</option>
        <option value="10001010">10001010</option>
        <option value="10001011">10001011</option>
        <option value="11001110">11001110</option>
        <option value="10011110">10011110</option>
      </select>
      <div class="ui horizontal divider">or</div>
      <div class="ui fluid multiple search selection dropdown">
        <input type="hidden" name="country"/>
        <i class="dropdown icon"/>
        <div class="default text">Select Country</div>
      </div>
      <div class="evaluated code" data-type="javascript">
        $('.no.label.example .ui.dropdown')
          .dropdown({
            useLabels: false
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownTextLabels1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Selection Dropdowns',
    title2: 'Text Labels',
    description: 'Sometimes multiselect include options which are long and would appear awkwardly as labels. Setting',
    model: '      <div class="ui ignored info message">\n' +
      '        You can customize any of the messages displayed by adjusting templates in <code>settings.message</code>\n' +
      '      </div>\n' +
      '      <select multiple="multiple" name="binary" class="ui fluid dropdown">\n' +
      '        <option value="">Select Tag</option>\n' +
      '        <option value="10001010">10001010</option>\n' +
      '        <option value="10001011">10001011</option>\n' +
      '        <option value="11001110">11001110</option>\n' +
      '        <option value="10011110">10011110</option>\n' +
      '      </select>\n' +
      '      <div class="ui horizontal divider">or</div>\n' +
      '      <div class="ui fluid multiple search selection dropdown">\n' +
      '        <input type="hidden" name="country"/>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="default text">Select Country</div>\n' +
      '      </div>\n' +
      '      <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.no.label.example .ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            useLabels: false\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
