<template>
  <div>
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
</template>

<script>
export default {
  name: 'ModuleDropdownDropdownDividersHeaders1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Menus',
    title2: 'Dropdown Dividers / Headers',
    description: 'A dropdown menu can contain dividers and/or headers to separate related content. Using',
    model: '        <div class="code" data-demo="false">\n' +
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
      '        </div>\n',
  },
};
</script>
