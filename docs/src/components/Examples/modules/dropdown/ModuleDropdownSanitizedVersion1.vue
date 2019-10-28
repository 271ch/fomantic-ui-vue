<template>
  <div>
        <div class="ui fluid multiple search selection dropdown evilexample_sanitized">
          <input type="hidden" name="animal2"/>
          <i class="dropdown icon"/>
          <div class="default text">Select Animal</div>
        </div>
        <div class="evaluated code" data-type="javascript">
        $('.ui.dropdown.evilexample_sanitized')
          .dropdown({
            preserveHTML : false,
            apiSettings: {
              url: '/evilapi.json'
            }
          });
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSanitizedVersion1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Sanitized Version',
    description: '???',
    model: '        <div class="ui fluid multiple search selection dropdown evilexample_sanitized">\n' +
      '          <input type="hidden" name="animal2"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">Select Animal</div>\n' +
      '        </div>\n' +
      '        <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.ui.dropdown.evilexample_sanitized\')\n' +
      '          .dropdown({\n' +
      '            preserveHTML : false,\n' +
      '            apiSettings: {\n' +
      '              url: \'/evilapi.json\'\n' +
      '            }\n' +
      '          });\n' +
      '        </div>\n',
  },
};
</script>
