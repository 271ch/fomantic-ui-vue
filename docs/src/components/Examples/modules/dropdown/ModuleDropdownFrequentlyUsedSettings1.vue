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
          <td>values</td>
          <td>false</td>
          <td>When specified allows you to initialize dropdown with specific values. See usage guide for details.</td>
        </tr>
        <tr>
          <td>on</td>
          <td>click</td>
          <td>Event used to trigger dropdown (Hover, Click, Custom Event)</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>false</td>
          <td>Whether the dropdown value can be cleared by the user after being selected. </td>
        </tr>
        <tr>
          <td>ignoreCase</td>
          <td>false<div class="ui label">New in 2.2.13</div></td>
          <td>Whether values with matching cases should be treated as identical when adding them to a dropdown.</td>
        </tr>
        <tr>
          <td>allowReselection</td>
          <td>false</td>
          <td>When set to <code>true</code> will fire <code>onChange</code> even when the value a user select matches the currently selected value.</td>
        </tr>
        <tr>
          <td>allowAdditions</td>
          <td>false</td>
          <td>Whether search selection should allow users to add their own selections, works for single or multiselect.</td>
        </tr>
        <tr>
          <td>hideAdditions</td>
          <td>true</td>
          <td>If disabled user additions will appear in the dropdown's menu using a specially formatted selection item formatted by <code>templates.addition</code>.</td>
        </tr>
        <tr>
          <td>action</td>
          <td>auto</td>
          <td>
          <p>Sets a default action to occur. (See usage guide)</p>
          <div class="ui vertical divided list">
            <div class="item">
              <div class="header">activate (default)</div>
              <div class="description">Updates dropdown text with selected value, sets element state to active, updates any hidden fields if available</div>
            </div>
            <div class="item">
              <div class="header">select</div>
              <div class="description">activates menu and updates input fields, but does not change current text</div>
            </div>
            <div class="item">
              <div class="header">combo</div>
              <div class="description">changes text of previous sibling element</div>
            </div>
            <div class="item">
              <div class="header">nothing</div>
              <div class="description">no action occurs</div>
            </div>
            <div class="item">
              <div class="header">hide</div>
              <div class="description">Dropdown menu is hidden</div>
            </div>
            <div class="item">
              <div class="header">function(text, value, element){}</div>
              <div class="description">custom function is executed with values specified in callback</div>
            </div>
          </div>
        </td></tr>
        <tr>
          <td>minCharacters</td>
          <td>1</td>
          <td>The minimum characters for a search to begin showing results</td>
        </tr>
        <tr>
          <td>match</td>
          <td>both</td>
          <td>When using <code>search selection</code> specifies how to match values.
          <div class="ui vertical divided list">
            <div class="item">
              <div class="header">both</div>
              <div class="description">Matches against text and value</div>
            </div>
            <div class="item">
              <div class="header">value</div>
              <div class="description">matches against value only</div>
            </div>
            <div class="item">
              <div class="header">text</div>
              <div class="description">matches against text only</div>
            </div>
          </div>
        </td></tr>
        <tr>
          <td>selectOnKeydown</td>
          <td>true</td>
          <td>Whether dropdown should select new option when using keyboard shortcuts. Setting to <code>false</code> will require <code>enter</code> or left click to confirm a choice.</td>
        </tr>
        <tr>
          <td>forceSelection</td>
          <td>true</td>
          <td>Whether search selection will force currently selected choice when element is blurred.</td>
        </tr>
        <tr>
          <td>allowCategorySelection</td>
          <td>false</td>
          <td>Whether menu items with sub-menus (categories) should be selectable</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>auto</td>
          <td>
            <div class="ui vertical divided list">
              <div class="item">
                <div class="header">auto</div>
                <div class="description">Convert option with "" (blank string) value to placeholder text</div>
              </div>
              <div class="item">
                <div class="header">value</div>
                <div class="description">Sets string value to placeholder text, leaves "" value</div>
              </div>
              <div class="item">
                <div class="header">false</div>
                <div class="description">Leaves "" value as a selectable option</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>ignoreDiacritics</td>
          <td>false</td>
          <td>When activated, searches will also match results for base diacritic letters. For example when searching for 'a', it will also match 'á' or 'â' or 'å' and so on...
              It will also ignore diacritics for the searchterm, so if searching for 'ó', it will match 'ó', but also 'o', 'ô' or 'õ' and so on...<div class="ui black label">New in 2.7.2</div><div class="ui red label">Not available in IE</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownFrequentlyUsedSettings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Frequently Used Settings',
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
      '          <td>values</td>\n' +
      '          <td>false</td>\n' +
      '          <td>When specified allows you to initialize dropdown with specific values. See usage guide for details.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>on</td>\n' +
      '          <td>click</td>\n' +
      '          <td>Event used to trigger dropdown (Hover, Click, Custom Event)</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>clearable</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Whether the dropdown value can be cleared by the user after being selected. </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>ignoreCase</td>\n' +
      '          <td>false<div class="ui label">New in 2.2.13</div></td>\n' +
      '          <td>Whether values with matching cases should be treated as identical when adding them to a dropdown.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>allowReselection</td>\n' +
      '          <td>false</td>\n' +
      '          <td>When set to <code>true</code> will fire <code>onChange</code> even when the value a user select matches the currently selected value.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>allowAdditions</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Whether search selection should allow users to add their own selections, works for single or multiselect.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>hideAdditions</td>\n' +
      '          <td>true</td>\n' +
      '          <td>If disabled user additions will appear in the dropdown\'s menu using a specially formatted selection item formatted by <code>templates.addition</code>.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>action</td>\n' +
      '          <td>auto</td>\n' +
      '          <td>\n' +
      '          <p>Sets a default action to occur. (See usage guide)</p>\n' +
      '          <div class="ui vertical divided list">\n' +
      '            <div class="item">\n' +
      '              <div class="header">activate (default)</div>\n' +
      '              <div class="description">Updates dropdown text with selected value, sets element state to active, updates any hidden fields if available</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">select</div>\n' +
      '              <div class="description">activates menu and updates input fields, but does not change current text</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">combo</div>\n' +
      '              <div class="description">changes text of previous sibling element</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">nothing</div>\n' +
      '              <div class="description">no action occurs</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">hide</div>\n' +
      '              <div class="description">Dropdown menu is hidden</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">function(text, value, element){}</div>\n' +
      '              <div class="description">custom function is executed with values specified in callback</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </td></tr>\n' +
      '        <tr>\n' +
      '          <td>minCharacters</td>\n' +
      '          <td>1</td>\n' +
      '          <td>The minimum characters for a search to begin showing results</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>match</td>\n' +
      '          <td>both</td>\n' +
      '          <td>When using <code>search selection</code> specifies how to match values.\n' +
      '          <div class="ui vertical divided list">\n' +
      '            <div class="item">\n' +
      '              <div class="header">both</div>\n' +
      '              <div class="description">Matches against text and value</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">value</div>\n' +
      '              <div class="description">matches against value only</div>\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '              <div class="header">text</div>\n' +
      '              <div class="description">matches against text only</div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </td></tr>\n' +
      '        <tr>\n' +
      '          <td>selectOnKeydown</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether dropdown should select new option when using keyboard shortcuts. Setting to <code>false</code> will require <code>enter</code> or left click to confirm a choice.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>forceSelection</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether search selection will force currently selected choice when element is blurred.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>allowCategorySelection</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Whether menu items with sub-menus (categories) should be selectable</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>placeholder</td>\n' +
      '          <td>auto</td>\n' +
      '          <td>\n' +
      '            <div class="ui vertical divided list">\n' +
      '              <div class="item">\n' +
      '                <div class="header">auto</div>\n' +
      '                <div class="description">Convert option with "" (blank string) value to placeholder text</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">value</div>\n' +
      '                <div class="description">Sets string value to placeholder text, leaves "" value</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">false</div>\n' +
      '                <div class="description">Leaves "" value as a selectable option</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>ignoreDiacritics</td>\n' +
      '          <td>false</td>\n' +
      '          <td>When activated, searches will also match results for base diacritic letters. For example when searching for \'a\', it will also match \'á\' or \'â\' or \'å\' and so on...\n' +
      '              It will also ignore diacritics for the searchterm, so if searching for \'ó\', it will match \'ó\', but also \'o\', \'ô\' or \'õ\' and so on...<div class="ui black label">New in 2.7.2</div><div class="ui red label">Not available in IE</div></td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
