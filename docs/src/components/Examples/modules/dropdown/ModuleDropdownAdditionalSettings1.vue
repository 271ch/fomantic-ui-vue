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
          <td>direction</td>
          <td>'auto'</td>
          <td>When set to <code>auto</code> determines direction based on whether dropdown can fit on screen. Set to <code>upward</code> or <code>downward</code> to always force a direction.</td>
        </tr>
        <tr>
          <td>keepOnScreen</td>
          <td>true</td>
          <td>Whether dropdown should try to keep itself on screen by checking whether menus display position in its <code>context</code> (Default context is page).</td>
        </tr>
        <tr>
          <td>context</td>
          <td>window</td>
          <td>Element context to use when checking whether can show when <code>keepOnScreen: true</code></td>
        </tr>
        <tr>
          <td>fullTextSearch</td>
          <td>false</td>
          <td>Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string, setting to "false" will only match start of string.</td>
        </tr>
        <tr>
          <td>hideDividers <div class="ui label">New in 2.4.0</div></td>
          <td>false</td>
          <td>How to handle dividers in the dropdown while searching. Dividers are defined as all siblings of items that match the <a href="#dom-settings">divider selector</a>
            <div class="ui vertical divided list">
              <div class="item">
                <div class="header">false</div>
                <div class="description">Dividers are not hidden</div>
              </div>
              <div class="item">
                <div class="header">true</div>
                <div class="description">All dividers are automatically hidden</div>
              </div>
              <div class="item">
                <div class="header">'empty'</div>
                <div class="description">All dividers not followed by a visible item are hidden (divider siblings are treated as a group)</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>preserveHTML</td>
          <td>true</td>
          <td>Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)</td>
        </tr>
        <tr>
          <td>sortSelect</td>
          <td>false</td>
          <td>Whether to sort values when creating a dropdown automatically from a select element.
            <div class="ui vertical divided list">
              <div class="item">
                <div class="header">true</div>
                <div class="description">Sort by name [A, B, C, a, b, c]</div>
              </div>
              <div class="item">
                <div class="header">natural</div>
                <div class="description">Sort by lowercase name [A, a, B, b, C, c]</div>
              </div>
              <div class="item">
                <div class="header">function(a, b){}</div>
                <div class="description">custom sort function is executed</div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>showOnFocus</td>
          <td>true</td>
          <td>Whether to show dropdown menu automatically on element focus.</td>
        </tr>
        <tr>
          <td>allowTab</td>
          <td>true</td>
          <td>Whether to allow the element to be navigable by keyboard, by automatically creating a <code>tabindex</code></td>
        </tr>
        <tr>
          <td>transition</td>
          <td>
            auto (slide down / slide up)
          </td>
          <td>Named transition to use when animating menu in and out. Defaults to <code>slide down</code> or <code>slide up</code> depending on dropdown direction. Fade and slide down are available without including <a href="/modules/transition.html">ui transitions</a></td>
        </tr>
        <tr>
          <td>duration</td>
          <td>
            200
          </td>
          <td>Duration of animation events</td>
        </tr>
        <tr>
          <td>keys</td>
          <td>
          <div class="code">
          keys : {
            backspace  : 8,
            delimiter  : 188, // comma
            deleteKey  : 46,
            enter      : 13,
            escape     : 27,
            pageUp     : 33,
            pageDown   : 34,
            leftArrow  : 37,
            upArrow    : 38,
            rightArrow : 39,
            downArrow  : 40
          }
          </div>
          </td>
          <td>
            The <code>keycode</code> used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass <code>false</code> for comma delimiter's value
          </td>
        </tr>
        <tr>
          <td>delay</td>
          <td>
          <div class="code">
          delay : {
            hide   : 300,
            show   : 200,
            search : 50,
            touch  : 50
          }
          </div>
          </td>
          <td>Time in milliseconds to debounce show or hide behavior when <code>on: hover</code> is used, or when touch is used.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownAdditionalSettings1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Dropdown',
    title2: 'Additional Settings',
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
      '          <td>direction</td>\n' +
      '          <td>\'auto\'</td>\n' +
      '          <td>When set to <code>auto</code> determines direction based on whether dropdown can fit on screen. Set to <code>upward</code> or <code>downward</code> to always force a direction.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>keepOnScreen</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether dropdown should try to keep itself on screen by checking whether menus display position in its <code>context</code> (Default context is page).</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>context</td>\n' +
      '          <td>window</td>\n' +
      '          <td>Element context to use when checking whether can show when <code>keepOnScreen: true</code></td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>fullTextSearch</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Specifying to "true" will use a fuzzy full text search, setting to "exact" will force the exact search to be matched somewhere in the string, setting to "false" will only match start of string.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>hideDividers <div class="ui label">New in 2.4.0</div></td>\n' +
      '          <td>false</td>\n' +
      '          <td>How to handle dividers in the dropdown while searching. Dividers are defined as all siblings of items that match the <a href="#dom-settings">divider selector</a>\n' +
      '            <div class="ui vertical divided list">\n' +
      '              <div class="item">\n' +
      '                <div class="header">false</div>\n' +
      '                <div class="description">Dividers are not hidden</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">true</div>\n' +
      '                <div class="description">All dividers are automatically hidden</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">\'empty\'</div>\n' +
      '                <div class="description">All dividers not followed by a visible item are hidden (divider siblings are treated as a group)</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>preserveHTML</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether HTML included in dropdown values should be preserved. (Allows icons to show up in selected value)</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>sortSelect</td>\n' +
      '          <td>false</td>\n' +
      '          <td>Whether to sort values when creating a dropdown automatically from a select element.\n' +
      '            <div class="ui vertical divided list">\n' +
      '              <div class="item">\n' +
      '                <div class="header">true</div>\n' +
      '                <div class="description">Sort by name [A, B, C, a, b, c]</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">natural</div>\n' +
      '                <div class="description">Sort by lowercase name [A, a, B, b, C, c]</div>\n' +
      '              </div>\n' +
      '              <div class="item">\n' +
      '                <div class="header">function(a, b){}</div>\n' +
      '                <div class="description">custom sort function is executed</div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>showOnFocus</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether to show dropdown menu automatically on element focus.</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>allowTab</td>\n' +
      '          <td>true</td>\n' +
      '          <td>Whether to allow the element to be navigable by keyboard, by automatically creating a <code>tabindex</code></td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>transition</td>\n' +
      '          <td>\n' +
      '            auto (slide down / slide up)\n' +
      '          </td>\n' +
      '          <td>Named transition to use when animating menu in and out. Defaults to <code>slide down</code> or <code>slide up</code> depending on dropdown direction. Fade and slide down are available without including <a href="/modules/transition.html">ui transitions</a></td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>duration</td>\n' +
      '          <td>\n' +
      '            200\n' +
      '          </td>\n' +
      '          <td>Duration of animation events</td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>keys</td>\n' +
      '          <td>\n' +
      '          <div class="code">\n' +
      '          keys : {\n' +
      '            backspace  : 8,\n' +
      '            delimiter  : 188, // comma\n' +
      '            deleteKey  : 46,\n' +
      '            enter      : 13,\n' +
      '            escape     : 27,\n' +
      '            pageUp     : 33,\n' +
      '            pageDown   : 34,\n' +
      '            leftArrow  : 37,\n' +
      '            upArrow    : 38,\n' +
      '            rightArrow : 39,\n' +
      '            downArrow  : 40\n' +
      '          }\n' +
      '          </div>\n' +
      '          </td>\n' +
      '          <td>\n' +
      '            The <code>keycode</code> used to represent keyboard shortcuts. To avoid issues with some foreign languages, you can pass <code>false</code> for comma delimiter\'s value\n' +
      '          </td>\n' +
      '        </tr>\n' +
      '        <tr>\n' +
      '          <td>delay</td>\n' +
      '          <td>\n' +
      '          <div class="code">\n' +
      '          delay : {\n' +
      '            hide   : 300,\n' +
      '            show   : 200,\n' +
      '            search : 50,\n' +
      '            touch  : 50\n' +
      '          }\n' +
      '          </div>\n' +
      '          </td>\n' +
      '          <td>Time in milliseconds to debounce show or hide behavior when <code>on: hover</code> is used, or when touch is used.</td>\n' +
      '        </tr>\n' +
      '      </tbody>\n' +
      '    </table>\n',
  },
};
</script>
