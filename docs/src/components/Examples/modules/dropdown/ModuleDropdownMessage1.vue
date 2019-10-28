<template>
  <div>
      <div class="ui floating labeled icon dropdown button">
        <i class="filter icon"/>
        <span class="text">Login</span>
        <div class="menu">
          <div class="ui error message">
            <div class="header">Error</div>
            <p>You must log-in to see all categories</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownMessage1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Message',
    description: 'A dropdown menu can contain a',
    model: '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="filter icon"/>\n' +
      '        <span class="text">Login</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="ui error message">\n' +
      '            <div class="header">Error</div>\n' +
      '            <p>You must log-in to see all categories</p>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
