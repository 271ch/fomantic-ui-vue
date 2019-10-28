<template>
  <div>
        <div class="ui fluid multiple search selection dropdown evilexample">
          <input type="hidden" name="animal1"/>
          <i class="dropdown icon"/>
          <div class="default text">Select Animal</div>
        </div>
        <div class="evaluated code" data-type="javascript">
        $('.ui.dropdown.evilexample')
          .dropdown({
            apiSettings: {
              url: '/evilapi.json'
            }
          });
        </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownVulnerableVersion1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Vulnerable Version',
    description: '???',
    model: '        <div class="ui fluid multiple search selection dropdown evilexample">\n' +
      '          <input type="hidden" name="animal1"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">Select Animal</div>\n' +
      '        </div>\n' +
      '        <div class="evaluated code" data-type="javascript">\n' +
      '        $(\'.ui.dropdown.evilexample\')\n' +
      '          .dropdown({\n' +
      '            apiSettings: {\n' +
      '              url: \'/evilapi.json\'\n' +
      '            }\n' +
      '          });\n' +
      '        </div>\n',
  },
};
</script>
