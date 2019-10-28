<template>
  <div>
      <div class="ui ignored info message">Floated content may stack to two lines without manually setting a width when or using a <code>fluid</code> dropdown
      </div>
      <div class="ui fluid selection dropdown">
        <i class="dropdown icon"/>
        <span class="default text">Select Type</span>
        <div class="menu">
          <div class="item">
            <i class="attention right floated icon"/>
            Important
          </div>
          <div class="item">
            <i class="comment right floated icon"/>
            Announcement
          </div>
          <div class="item">
            <i class="conversation right floated icon"/>
            Discussion
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownFloatedContent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Floated Content',
    description: 'A dropdown menu can contain floated content.',
    model: '      <div class="ui ignored info message">Floated content may stack to two lines without manually setting a width when or using a <code>fluid</code> dropdown\n' +
      '      </div>\n' +
      '      <div class="ui fluid selection dropdown">\n' +
      '        <i class="dropdown icon"/>\n' +
      '        <span class="default text">Select Type</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="item">\n' +
      '            <i class="attention right floated icon"/>\n' +
      '            Important\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="comment right floated icon"/>\n' +
      '            Announcement\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <i class="conversation right floated icon"/>\n' +
      '            Discussion\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
