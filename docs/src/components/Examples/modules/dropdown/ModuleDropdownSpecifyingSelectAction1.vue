<template>
  <div>
      <table class="ui definition sortable celled table segment">
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>activate (Default)</td>
            <td>Selects current item, adjusts dropdown value and changes dropdown text</td>
          </tr>
          <tr>
            <td>combo</td>
            <td>Same as activate, but updates previous elements text instead of self</td>
          </tr>
          <tr>
            <td>select</td>
            <td>Selects current item from menu and stores value, but does not change dropdown text</td>
          </tr>
          <tr>
            <td>hide</td>
            <td>Hides the dropdown menu and stores value, but does not change text</td>
          </tr>
          <tr>
            <td>function(text, value, element){}</td>
            <td>Custom action</td>
          </tr>
          <tr>
            <td>nothing</td>
            <td>Does nothing</td>
          </tr>
        </tbody>
      </table>
      <div class="code" data-type="javascript" data-label="Specified Action">
        $('.dropdown')
          .dropdown({
            action: 'combo'
          })
        ;
      </div>
      <div class="code" data-type="javascript" data-label="Custom Action">
        $('.dropdown')
          .dropdown({
            action: function(text, value) {
              // nothing built in occurs
            }
          })
        ;
      </div>
      <div class="code" data-type="javascript" data-label="Custom Action">
        $('.dropdown')
          .dropdown({
            action: 'hide',
            onChange: function(value, text, $selectedItem) {
              // custom action
            }
          })
        ;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSpecifyingSelectAction1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Initializing',
    title2: 'Specifying Select Action',
    description: '???',
    model: '      <table class="ui definition sortable celled table segment">\n' +
      '        <thead>\n' +
      '          <tr>\n' +
      '            <th>Action</th>\n' +
      '            <th>Description</th>\n' +
      '          </tr>\n' +
      '        </thead>\n' +
      '        <tbody>\n' +
      '          <tr>\n' +
      '            <td>activate (Default)</td>\n' +
      '            <td>Selects current item, adjusts dropdown value and changes dropdown text</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>combo</td>\n' +
      '            <td>Same as activate, but updates previous elements text instead of self</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>select</td>\n' +
      '            <td>Selects current item from menu and stores value, but does not change dropdown text</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>hide</td>\n' +
      '            <td>Hides the dropdown menu and stores value, but does not change text</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>function(text, value, element){}</td>\n' +
      '            <td>Custom action</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>nothing</td>\n' +
      '            <td>Does nothing</td>\n' +
      '          </tr>\n' +
      '        </tbody>\n' +
      '      </table>\n' +
      '      <div class="code" data-type="javascript" data-label="Specified Action">\n' +
      '        $(\'.dropdown\')\n' +
      '          .dropdown({\n' +
      '            action: \'combo\'\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript" data-label="Custom Action">\n' +
      '        $(\'.dropdown\')\n' +
      '          .dropdown({\n' +
      '            action: function(text, value) {\n' +
      '              // nothing built in occurs\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n' +
      '      <div class="code" data-type="javascript" data-label="Custom Action">\n' +
      '        $(\'.dropdown\')\n' +
      '          .dropdown({\n' +
      '            action: \'hide\',\n' +
      '            onChange: function(value, text, $selectedItem) {\n' +
      '              // custom action\n' +
      '            }\n' +
      '          })\n' +
      '        ;\n' +
      '      </div>\n',
  },
};
</script>
