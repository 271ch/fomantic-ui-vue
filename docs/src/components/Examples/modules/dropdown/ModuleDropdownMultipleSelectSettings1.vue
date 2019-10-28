<template>
  <div>
    <table class="ui celled sortable definition table segment">
      <thead>
        <tr>
        <th>Setting</th>
        <th class="eight wide">Default</th>
        <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>useLabels</td>
          <td>
           true
          </td>
          <td>Whether multiselect should use labels. Must be set to true when <code>allowAdditions</code> is <code>true</code></td>
        </tr>
        <tr>
          <td>maxSelections</td>
          <td>
           false
          </td>
          <td>When set to a number, sets the maximum number of selections</td>
        </tr>
        <tr>
          <td>glyphWidth</td>
          <td>
           1.0714
          </td>
          <td>Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in <code>em</code></td>
        </tr>
        <tr>
          <td>label</td>
          <td>
            <div class="code">
            label: {
              transition : 'horizontal flip',
              duration   : 200,
              variation  : false
            }
            </div>
          </td>
          <td>Allows customization of multi-select labels</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMultipleSelectSettings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Multiple Select Settings',
    description: '???',
    model: '    <table class="ui celled sortable definition table segment">\n' +
      '      <thead>\n' +
      '        <tr>\n' +
      '        <th>Setting</th>\n' +
      '        <th class="eight wide">Default</th>\n' +
      '        <th>Description</th>\n' +
      '        </tr>\n' +
      '      </thead>\n' +
      '      <tbody>\n' +
      '        <tr>\n' +
      '          <td>useLabels</td>\n' +
      '          <td>\n' +
      '           true\n' +
      '          </td>\n' +
      '          <td>Whether multiselect should use labels. Must be set to true when <code>allowAdditions</code> is <code>true</code></td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>maxSelections</td>\n' +
      '          <td>\n' +
      '           false\n' +
      '          </td>\n' +
      '          <td>When set to a number, sets the maximum number of selections</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>glyphWidth</td>\n' +
      '          <td>\n' +
      '           1.0714\n' +
      '          </td>\n' +
      '          <td>Maximum glyph width, used to calculate search size. This is usually size of a "W" in your font in <code>em</code></td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>label</td>\n' +
      '          <td>\n' +
      '            <div class="code">\n' +
      '            label: {\n' +
      '              transition : \'horizontal flip\',\n' +
      '              duration   : 200,\n' +
      '              variation  : false\n' +
      '            }\n' +
      '            </div>\n' +
      '          </td>\n' +
      '          <td>Allows customization of multi-select labels</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
