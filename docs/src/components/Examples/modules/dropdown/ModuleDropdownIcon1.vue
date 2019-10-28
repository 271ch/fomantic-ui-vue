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
            <i class="attention icon"/>
            Important
          </div>
          <div class="item">
            <i class="comment icon"/>
            Announcement
          </div>
          <div class="item">
            <i class="conversation icon"/>
            Discussion
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownIcon1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Icon',
    description: 'A dropdown menu can contain an',
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
      '            <i class="attention icon"/>\n' +
      '            Important\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="comment icon"/>\n' +
      '            Announcement\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="conversation icon"/>\n' +
      '            Discussion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
