<template>
  <div>
      <div class="ui multiple dropdown">
        <input type="hidden" name="filters"/>
        <i class="filter icon"/>
        <span class="text">Filter Posts</span>
        <div class="menu">
          <div class="ui icon search input">
            <i class="search icon"/>
            <input type="text" placeholder="Search tags..."/>
          </div>
          <div class="divider"/>
          <div class="header">
            <i class="tags icon"/>
            Tag Label
          </div>
          <div class="scrolling menu">
            <div class="item" data-value="important">
              <div class="ui red empty circular label"/>
              Important
            </div>
            <div class="item" data-value="announcement">
              <div class="ui blue empty circular label"/>
              Announcement
            </div>
            <div class="item" data-value="cannotfix">
              <div class="ui black empty circular label"/>
              Cannot Fix
            </div>
            <div class="item" data-value="news">
              <div class="ui purple empty circular label"/>
              News
            </div>
            <div class="item" data-value="enhancement">
              <div class="ui orange empty circular label"/>
              Enhancement
            </div>
            <div class="item" data-value="off-topic">
              <div class="ui yellow empty circular label"/>
              Off Topic
            </div>
            <div class="item" data-value="interesting">
              <div class="ui pink empty circular label"/>
              Interesting
            </div>
            <div class="item" data-value="discussion">
              <div class="ui green empty circular label"/>
              Discussion
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownSearchInMenu2',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Types',
    title2: 'Search In-Menu',
    description: 'A dropdown can include a search prompt inside its menu',
    model: '      <div class="ui multiple dropdown">\n' +
      '        <input type="hidden" name="filters"/>\n' +
      '        <i class="filter icon"/>\n' +
      '        <span class="text">Filter Posts</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="ui icon search input">\n' +
      '            <i class="search icon"/>\n' +
      '            <input type="text" placeholder="Search tags..."/>\n' +
      '          </div>\n' +
      '          <div class="divider"/>\n' +
      '          <div class="header">\n' +
      '            <i class="tags icon"/>\n' +
      '            Tag Label\n' +
      '          </div>\n' +
      '          <div class="scrolling menu">\n' +
      '            <div class="item" data-value="important">\n' +
      '              <div class="ui red empty circular label"/>\n' +
      '              Important\n' +
      '            </div>\n' +
      '            <div class="item" data-value="announcement">\n' +
      '              <div class="ui blue empty circular label"/>\n' +
      '              Announcement\n' +
      '            </div>\n' +
      '            <div class="item" data-value="cannotfix">\n' +
      '              <div class="ui black empty circular label"/>\n' +
      '              Cannot Fix\n' +
      '            </div>\n' +
      '            <div class="item" data-value="news">\n' +
      '              <div class="ui purple empty circular label"/>\n' +
      '              News\n' +
      '            </div>\n' +
      '            <div class="item" data-value="enhancement">\n' +
      '              <div class="ui orange empty circular label"/>\n' +
      '              Enhancement\n' +
      '            </div>\n' +
      '            <div class="item" data-value="off-topic">\n' +
      '              <div class="ui yellow empty circular label"/>\n' +
      '              Off Topic\n' +
      '            </div>\n' +
      '            <div class="item" data-value="interesting">\n' +
      '              <div class="ui pink empty circular label"/>\n' +
      '              Interesting\n' +
      '            </div>\n' +
      '            <div class="item" data-value="discussion">\n' +
      '              <div class="ui green empty circular label"/>\n' +
      '              Discussion\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
