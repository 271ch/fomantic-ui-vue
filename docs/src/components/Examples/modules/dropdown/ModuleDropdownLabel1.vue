<template>
  <div>
      <div class="ui floating labeled icon dropdown button">
        <i class="filter icon"/>
        <span class="text">Filter</span>
        <div class="menu">
          <div class="header">
            Search Issues
          </div>
          <div class="ui left icon input">
            <i class="search icon"/>
            <input type="text" name="search" placeholder="Search..."/>
          </div>
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
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownLabel1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Label',
    description: 'A dropdown menu can contain a',
    model: '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="filter icon"/>\n' +
      '        <span class="text">Filter</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="header">\n' +
      '            Search Issues\n' +
      '          </div>\n' +
      '          <div class="ui left icon input">\n' +
      '            <i class="search icon"/>\n' +
      '            <input type="text" name="search" placeholder="Search..."/>\n' +
      '          </div>\n' +
      '          <div class="header">\n' +
      '            <i class="tags icon"/>\n' +
      '            Filter by tag\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <div class="ui red empty circular label"/>\n' +
      '            Important\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <div class="ui blue empty circular label"/>\n' +
      '            Announcement\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <div class="ui black empty circular label"/>\n' +
      '            Discussion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
