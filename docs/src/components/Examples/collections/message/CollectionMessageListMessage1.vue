<template>
  <div>
    <FuiMessage header="New Site Features">
      <FuiList tag=ul sub>
        <FuiLItem>You can now have cover images on blog pages</FuiLItem>
        <FuiLItem>Drafts will now auto-save while writing</FuiLItem>
      </FuiList>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageListMessage1',
  info: {
    converted: true,
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
  },
};
</script>
