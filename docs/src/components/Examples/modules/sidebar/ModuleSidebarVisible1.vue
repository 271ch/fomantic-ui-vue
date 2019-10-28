<template>
  <div>
      <div class="ui ignored info message">
        To have a sidebar appear on page load simply add the class <code>visible</code> to the sidebar.
      </div>
      <div class="code" data-type="html">
        <div class="ui visible sidebar"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarVisible1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Types',
    title2: 'Visible',
    description: 'A sidebar can be visible on the page',
    model: '      <div class="ui ignored info message">\n' +
      '        To have a sidebar appear on page load simply add the class <code>visible</code> to the sidebar.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html">\n' +
      '        <div class="ui visible sidebar"/>\n' +
      '      </div>\n',
  },
};
</script>
