<template>
  <div>
      <div class="code" data-label="HTML" data-type="html">
        <div class="ui dropdown">
          <div class="text"/>
          <i class="dropdown icon"/>
        </div>
      </div>
      <div class="code" data-label="Javascript" data-type="javascript">
        $('.ui.dropdown')
          .dropdown({
            values: [
              {
                name: 'Male',
                value: 'male'
              },
              {
                name     : 'Female',
                value    : 'female',
                selected : true
              }
            ]
          })
        ;
      </div>
      <br/>
      <div class="code" data-label="Javascript" data-type="javascript">
        $('.ui.dropdown')
          .dropdown({
            values: [
              {
                name     : 'Filter by tag',
                type     : 'header'
                // Will be displayed as header
              },
              {
                name     : 'Important',
                value    : 'important',
                type     : 'item'
                // Will be displayed as item
              },
              {
                name     : 'Announcement',
                value    : 'announcement'
                // Will be displayed as item
              }
            ]
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownInitializingwithJavascriptOnly1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Initializing with Javascript Only',
    description: '???',
    model: '      <div class="code" data-label="HTML" data-type="html">\n' +
      '        <div class="ui dropdown">\n' +
      '          <div class="text"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="code" data-label="Javascript" data-type="javascript">\n' +
      '        $(\'.ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            values: [\n' +
      '              {\n' +
      '                name: \'Male\',\n' +
      '                value: \'male\'\n' +
      '              },\n' +
      '              {\n' +
      '                name     : \'Female\',\n' +
      '                value    : \'female\',\n' +
      '                selected : true\n' +
      '              }\n' +
      '            ]\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <br/>\n' +
      '      <div class="code" data-label="Javascript" data-type="javascript">\n' +
      '        $(\'.ui.dropdown\')\n' +
      '          .dropdown({\n' +
      '            values: [\n' +
      '              {\n' +
      '                name     : \'Filter by tag\',\n' +
      '                type     : \'header\'\n' +
      '                // Will be displayed as header\n' +
      '              },\n' +
      '              {\n' +
      '                name     : \'Important\',\n' +
      '                value    : \'important\',\n' +
      '                type     : \'item\'\n' +
      '                // Will be displayed as item\n' +
      '              },\n' +
      '              {\n' +
      '                name     : \'Announcement\',\n' +
      '                value    : \'announcement\'\n' +
      '                // Will be displayed as item\n' +
      '              }\n' +
      '            ]\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
