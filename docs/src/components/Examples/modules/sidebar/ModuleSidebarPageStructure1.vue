<template>
  <div>
      <div class="ui info message">
        Sidebar will automatically add the correct layout on first load if it is not set-up, however fixing your page's layout on load <b>will reduce performance and is not recommended</b>.
      </div>
      <div class="code" data-type="html" data-escape="true">
        &lt;body&gt;
          &lt;div class="ui sidebar"&gt;
            ...
          &lt;/div&gt;
          &lt;div class="pusher"&gt;
            Your site's actual content
          &lt;/div&gt;
        &lt;/body&gt;
      </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleSidebarPageStructure1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Set-up',
    title2: 'Page Structure',
    description: 'Using a sidebar requires a specific page structure. For optimal performance your page should be already set-up with this structure before initializing a sidebar.',
    model: '      <div class="ui info message">\n' +
      '        Sidebar will automatically add the correct layout on first load if it is not set-up, however fixing your page\'s layout on load <b>will reduce performance and is not recommended</b>.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-escape="true">\n' +
      '        &lt;body&gt;\n' +
      '          &lt;div class="ui sidebar"&gt;\n' +
      '            ...\n' +
      '          &lt;/div&gt;\n' +
      '          &lt;div class="pusher"&gt;\n' +
      '            Your site\'s actual content\n' +
      '          &lt;/div&gt;\n' +
      '        &lt;/body&gt;\n' +
      '      </div>\n',
  },
};
</script>
