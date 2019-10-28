<template>
  <div>
      <div class="ui floating labeled icon dropdown button">
        <i class="filter icon"/>
        <span class="text">Filter</span>
        <div class="menu">
          <div class="header">
            <i class="tags icon"/>
            Filter by tag
          </div>
          <div class="divider"/>
          <div class="item">
            Important
          </div>
          <div class="item">
            Announcement
          </div>
          <div class="item">
            Discussion
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownDivider1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Divider',
    description: 'A dropdown menu can contain dividers to separate related content',
    model: '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="filter icon"/>\n' +
      '        <span class="text">Filter</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="header">\n' +
      '            <i class="tags icon"/>\n' +
      '            Filter by tag\n' +
      '          </div>\n' +
      '          <div class="divider"/>\n' +
      '          <div class="item">\n' +
      '            Important\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            Announcement\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            Discussion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
