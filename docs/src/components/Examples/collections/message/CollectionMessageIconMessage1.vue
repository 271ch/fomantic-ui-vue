<template>
  <div>
    <FuiMessage icon iconName=inbox>
      <FuiContent header="Have you heard about our mailing list?">
        <p>Get the best news in your e-mail every day.</p>
      </FuiContent>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageIconMessage1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Types',
    title2: 'Icon Message',
    description: 'A message can contain an icon.',
    model: '    <div class="ui icon message">\n' +
      '      <i class="inbox icon"></i>\n' +
      '      <div class="content">\n' +
      '        <div class="header">\n' +
      '          Have you heard about our mailing list?\n' +
      '        </div>\n' +
      '        <p>Get the best news in your e-mail every day.</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
