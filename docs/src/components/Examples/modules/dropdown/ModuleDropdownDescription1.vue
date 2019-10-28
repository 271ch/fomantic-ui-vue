<template>
  <div>
      <div class="ui ignored info message">
        Using a description may require setting a minimum width on <code>menu</code> to prevent content overlap
      </div>
      <div class="ui floating labeled icon dropdown button">
        <i class="filter icon"/>
        <span class="text">Filter Tags</span>
        <div class="menu">
          <div class="header">
            Filter by tag
          </div>
          <div class="divider"/>
          <div class="item">
            <span class="description">2 new</span>
            <span class="text">Important</span>
          </div>
          <div class="item">
            <span class="description">10 new</span>
            <span class="text">Hopper</span>
          </div>
          <div class="item">
            <span class="description">5 new</span>
            <span class="text">Discussion</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleDropdownDescription1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'dropdown',
    title1: 'Content',
    title2: 'Description',
    description: 'A dropdown menu can contain a description.',
    model: '      <div class="ui ignored info message">\n' +
      '        Using a description may require setting a minimum width on <code>menu</code> to prevent content overlap\n' +
      '      </div>\n' +
      '      <div class="ui floating labeled icon dropdown button">\n' +
      '        <i class="filter icon"/>\n' +
      '        <span class="text">Filter Tags</span>\n' +
      '        <div class="menu">\n' +
      '          <div class="header">\n' +
      '            Filter by tag\n' +
      '          </div>\n' +
      '          <div class="divider"/>\n' +
      '          <div class="item">\n' +
      '            <span class="description">2 new</span>\n' +
      '            <span class="text">Important</span>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <span class="description">10 new</span>\n' +
      '            <span class="text">Hopper</span>\n' +
      '          </div>\n' +
      '          <div class="item">\n' +
      '            <span class="description">5 new</span>\n' +
      '            <span class="text">Discussion</span>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n',
  },
};
</script>
