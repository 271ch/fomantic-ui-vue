<template>
  <div>
    <table class="ui celled sortable definition table segment">
      <thead>
        <tr>
        <th>Setting</th>
        <th class="four wide">Default</th>
        <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>apiSettings</td>
          <td>false</td>
          <td>Can be set to an object to specify <a href="/behaviors/api.html">API settings</a> for retrieving remote selection menu content from an API endpoint</td>
        </tr>
        <tr>
          <td>fields</td>
          <td>
            <div class="code" data-type="css">
            fields: {
              remoteValues : 'results', // grouping for api results
              values       : 'values', // grouping for all dropdown values
              name         : 'name',   // displayed dropdown text
              value        : 'value'   // actual dropdown value
            }
            </div>
          </td>
          <td>List mapping dropdown content to JSON Property when using API</td>
        </tr>
        <tr>
          <td>filterRemoteData</td>
          <td>false</td>
          <td>Whether results returned from API should be filtered by query before being displayed</td>
        </tr>
        <tr>
          <td>saveRemoteData</td>
          <td>true</td>
          <td>When enabled, will automatically store selected name/value pairs in <code>sessionStorage</code> to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownRemoteSettings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Remote Settings',
    description: '???',
    model: '    <table class="ui celled sortable definition table segment">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '        <th>Setting</th>\n' +
      '        <th class="four wide">Default</th>\n' +
      '        <th>Description</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>apiSettings</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Can be set to an object to specify <a href="/behaviors/api.html">API settings</a> for retrieving remote selection menu content from an API endpoint</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>fields</td>\n' +
      '          <td>\n' +
      '            <div class="code" data-type="css">\n' +
      '            fields: {\n' +
      '              remoteValues : \'results\', // grouping for api results\n' +
      '              values       : \'values\', // grouping for all dropdown values\n' +
      '              name         : \'name\',   // displayed dropdown text\n' +
      '              value        : \'value\'   // actual dropdown value\n' +
      '            }\n' +
      '            </div>\n' +
      '          </td>\n' +
      '          <td>List mapping dropdown content to JSON Property when using API</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>filterRemoteData</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Whether results returned from API should be filtered by query before being displayed</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>saveRemoteData</td>\n' +
      '          <td>true</td>\n' +
      '          <td>When enabled, will automatically store selected name/value pairs in <code>sessionStorage</code> to preserve user selection on page refresh. Disabling will clear remote dropdown values on refresh.</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
