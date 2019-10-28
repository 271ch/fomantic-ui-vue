<template>
  <div>
      <div class="ui ignored info icon message">
        <i class="help circle icon"/>
        <div class="content">
          <p>A dropdown will automatically select on page load any menu item that includes the current value of <code>text</code> or your dropdown's <code>hidden input</code> value.</p>
          <p>This is used to preserve a user's selection on page navigation and will automatically remove and default text placeholder formatting.</p>
        </div>
      </div>
      Current action: <div class="ui inline dropdown">
        <div class="text">Hide</div>
        <i class="dropdown icon"/>
        <div class="menu">
          <div class="item">Edit</div>
          <div class="item">Remove</div>
          <div class="item">Hide</div>
        </div>
      </div>
      <div class="divider example">
        <h4 class="ui header">Dropdown Dividers / Headers</h4>
        <p>A dropdown menu can contain dividers and/or headers to separate related content. Using <code>hideDividers</code> lets you control how the elements are handled while filtering items.</p>
        <div class="code" data-demo="false">
          $('.divider.example .dropdown')
            .dropdown({
              hideDividers: option
            })
          ;
        </div>
        <div class="ui stackable three column grid">
          <div class="column">
            <div class="ui sub header">false</div>
            <div class="ui labeled icon pointing dropdown button">
              <i class="filter icon"/>
              <span class="text">Filter Posts</span>
              <div class="menu">
                <div class="ui search icon input">
                  <i class="search icon"/>
                  <input name="search" placeholder="Search issues..." type="text"/>
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="tags icon"/>
                  Filter by tag
                </div>
                <div class="item">
                  <div class="ui red empty circular label"/>
                  Important
                </div>
                <div class="item">
                  <div class="ui blue empty circular label"/>
                  Announcement
                </div>
                <div class="item">
                  <div class="ui black empty circular label"/>
                  Discussion
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="calendar icon"/>
                  Filter by date
                </div>
                <div class="item">
                  <i class="olive circle icon"/>
                  This Week
                </div>
                <div class="item">
                  <i class="violet circle icon"/>
                  This Month
                </div>
                <div class="item">
                  <i class="orange circle icon"/>
                  This Year
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui sub header">true</div>
            <div class="ui labeled icon pointing dropdown button">
              <i class="filter icon"/>
              <span class="text">Filter Posts</span>
              <div class="menu">
                <div class="ui search icon input">
                  <i class="search icon"/>
                  <input name="search" placeholder="Search issues..." type="text"/>
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="tags icon"/>
                  Filter by tag
                </div>
                <div class="item">
                  <div class="ui red empty circular label"/>
                  Important
                </div>
                <div class="item">
                  <div class="ui blue empty circular label"/>
                  Announcement
                </div>
                <div class="item">
                  <div class="ui black empty circular label"/>
                  Discussion
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="calendar icon"/>
                  Filter by date
                </div>
                <div class="item">
                  <i class="olive circle icon"/>
                  This Week
                </div>
                <div class="item">
                  <i class="violet circle icon"/>
                  This Month
                </div>
                <div class="item">
                  <i class="orange circle icon"/>
                  This Year
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="ui sub header">'empty'</div>
            <div class="ui labeled icon pointing dropdown button">
              <i class="filter icon"/>
              <span class="text">Filter Posts</span>
              <div class="menu">
                <div class="ui search icon input">
                  <i class="search icon"/>
                  <input name="search" placeholder="Search issues..." type="text"/>
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="tags icon"/>
                  Filter by tag
                </div>
                <div class="item">
                  <div class="ui red empty circular label"/>
                  Important
                </div>
                <div class="item">
                  <div class="ui blue empty circular label"/>
                  Announcement
                </div>
                <div class="item">
                  <div class="ui black empty circular label"/>
                  Discussion
                </div>
                <div class="divider"/>
                <div class="header">
                  <i class="calendar icon"/>
                  Filter by date
                </div>
                <div class="item">
                  <i class="olive circle icon"/>
                  This Week
                </div>
                <div class="item">
                  <i class="violet circle icon"/>
                  This Month
                </div>
                <div class="item">
                  <i class="orange circle icon"/>
                  This Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownPreservingUserSelections1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Menus',
    title2: 'Preserving User Selections',
    description: 'This example uses a preset text value to preserve the menu item on page navigation',
    model: '      <div class="ui ignored info icon message">\n' +
      '        <i class="help circle icon"/>\n' +
      '        <div class="content">\n' +
      '          <p>A dropdown will automatically select on page load any menu item that includes the current value of <code>text</code> or your dropdown\'s <code>hidden input</code> value.</p>\n' +
      '          <p>This is used to preserve a user\'s selection on page navigation and will automatically remove and default text placeholder formatting.</p>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      Current action: <div class="ui inline dropdown">\n' +
      '        <div class="text">Hide</div>\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">Edit</div>\n' +
      '          <div class="item">Remove</div>\n' +
      '          <div class="item">Hide</div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="divider example">\n' +
      '        <h4 class="ui header">Dropdown Dividers / Headers</h4>\n' +
      '        <p>A dropdown menu can contain dividers and/or headers to separate related content. Using <code>hideDividers</code> lets you control how the elements are handled while filtering items.</p>\n' +
      '        <div class="code" data-demo="false">\n' +
      '          $(\'.divider.example .dropdown\')\n' +
      '            .dropdown({\n' +
      '              hideDividers: option\n' +
      '            })\n' +
      '          ;\n' +
      '        </div>\n' +
      '        <div class="ui stackable three column grid">\n' +
      '          <div class="column">\n' +
      '            <div class="ui sub header">false</div>\n' +
      '            <div class="ui labeled icon pointing dropdown button">\n' +
      '              <i class="filter icon"/>\n' +
      '              <span class="text">Filter Posts</span>\n' +
      '              <div class="menu">\n' +
      '                <div class="ui search icon input">\n' +
      '                  <i class="search icon"/>\n' +
      '                  <input name="search" placeholder="Search issues..." type="text"/>\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="tags icon"/>\n' +
      '                  Filter by tag\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui red empty circular label"/>\n' +
      '                  Important\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui blue empty circular label"/>\n' +
      '                  Announcement\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui black empty circular label"/>\n' +
      '                  Discussion\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="calendar icon"/>\n' +
      '                  Filter by date\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="olive circle icon"/>\n' +
      '                  This Week\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="violet circle icon"/>\n' +
      '                  This Month\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="orange circle icon"/>\n' +
      '                  This Year\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui sub header">true</div>\n' +
      '            <div class="ui labeled icon pointing dropdown button">\n' +
      '              <i class="filter icon"/>\n' +
      '              <span class="text">Filter Posts</span>\n' +
      '              <div class="menu">\n' +
      '                <div class="ui search icon input">\n' +
      '                  <i class="search icon"/>\n' +
      '                  <input name="search" placeholder="Search issues..." type="text"/>\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="tags icon"/>\n' +
      '                  Filter by tag\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui red empty circular label"/>\n' +
      '                  Important\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui blue empty circular label"/>\n' +
      '                  Announcement\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui black empty circular label"/>\n' +
      '                  Discussion\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="calendar icon"/>\n' +
      '                  Filter by date\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="olive circle icon"/>\n' +
      '                  This Week\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="violet circle icon"/>\n' +
      '                  This Month\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="orange circle icon"/>\n' +
      '                  This Year\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '          <div class="column">\n' +
      '            <div class="ui sub header">\'empty\'</div>\n' +
      '            <div class="ui labeled icon pointing dropdown button">\n' +
      '              <i class="filter icon"/>\n' +
      '              <span class="text">Filter Posts</span>\n' +
      '              <div class="menu">\n' +
      '                <div class="ui search icon input">\n' +
      '                  <i class="search icon"/>\n' +
      '                  <input name="search" placeholder="Search issues..." type="text"/>\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="tags icon"/>\n' +
      '                  Filter by tag\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui red empty circular label"/>\n' +
      '                  Important\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui blue empty circular label"/>\n' +
      '                  Announcement\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <div class="ui black empty circular label"/>\n' +
      '                  Discussion\n' +
      '                </div>\n' +
      '                <div class="divider"/>\n' +
      '                <div class="header">\n' +
      '                  <i class="calendar icon"/>\n' +
      '                  Filter by date\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="olive circle icon"/>\n' +
      '                  This Week\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="violet circle icon"/>\n' +
      '                  This Month\n' +
      '                </div>\n' +
      '                <div class="item">\n' +
      '                  <i class="orange circle icon"/>\n' +
      '                  This Year\n' +
      '                </div>\n' +
      '              </div>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
