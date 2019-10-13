<template>
  <div>
    <div class="ui message">
      <div class="header">
        New Site Features
      </div>
      <ul class="list">
        <li>You can now have cover images on blog pages</li>
        <li>Drafts will now auto-save while writing</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageListMessage1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Types',
      title2: 'List Message',
      description: 'A message with a list',
      model: '    <div class="ui message">\n' +
      '      <div class="header">\n' +
      '        New Site Features\n' +
      '      </div>\n' +
      '      <ul class="list">\n' +
      '        <li>You can now have cover images on blog pages</li>\n' +
      '        <li>Drafts will now auto-save while writing</li>\n' +
      '      </ul>\n' +
      '    </div>\n',
    };
  },
};
</script>
