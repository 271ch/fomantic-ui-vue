<template>
  <div>
      <div class="ui ignored warning message">
        Fixed content that is not included adjacent to your <code>pusher</code> <b>will lose its positioning</b> when a sidebar is shown.
      </div>
      <div class="code" data-type="html" data-escape="true">
        &lt;body&gt;
          &lt;div class="ui sidebar"&gt;
            ...
          &lt;/div&gt;
          &lt;div class="ui top fixed menu"&gt;
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
  name: 'ModuleSidebarUsingFixedContent1',
  info: {
    converted: false,
    elementType: 'modules',
    element: 'sidebar',
    title1: 'Set-up',
    title2: 'Using Fixed Content',
    description: 'Any fixed position content that should move with page content when your sidebar is visible, should receive the class name',
    model: '      <div class="ui ignored warning message">\n' +
      '        Fixed content that is not included adjacent to your <code>pusher</code> <b>will lose its positioning</b> when a sidebar is shown.\n' +
      '      </div>\n' +
      '      <div class="code" data-type="html" data-escape="true">\n' +
      '        &lt;body&gt;\n' +
      '          &lt;div class="ui sidebar"&gt;\n' +
      '            ...\n' +
      '          &lt;/div&gt;\n' +
      '          &lt;div class="ui top fixed menu"&gt;\n' +
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
