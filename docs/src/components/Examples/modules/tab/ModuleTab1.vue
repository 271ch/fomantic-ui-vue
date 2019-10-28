<template>
  <div>
      <div class="ignored ui info message">
        <h4 class="ui header">Default Tabs</h4>
        <p>After any tab is opened it will look for a default tab to open inside of the current tab. This is the first tab that begins with the same stem url as the parent tab. For example a tab with the path <code>data-tab="home"</code> might open a tab automatically <code>data-tab="/home/inbox"</code>.</p>
        <p>This will happen recursively for every tab open, allowing as many levels of tabs as you like.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTab1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'tab',
    title1: 'Initializing Tabs',
    title2: '???',
    description: '???',
    model: '      <div class="ignored ui info message">\n' +
      '        <h4 class="ui header">Default Tabs</h4>\n' +
      '        <p>After any tab is opened it will look for a default tab to open inside of the current tab. This is the first tab that begins with the same stem url as the parent tab. For example a tab with the path <code>data-tab="home"</code> might open a tab automatically <code>data-tab="/home/inbox"</code>.</p>\n' +
      '        <p>This will happen recursively for every tab open, allowing as many levels of tabs as you like.</p>\n' +
      '      </div>\n',
  },
};
</script>
