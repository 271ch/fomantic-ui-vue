<template>
  <div>
    <FuiMessage icon>
      <FuiIcon name="notched circle" loading></FuiIcon>
      <FuiContent header="Just one second">
        <p>We're fetching that content for you.</p>
      </FuiContent>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageIconMessage2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Types',
    title2: 'Icon Message',
    description: 'A message can contain an icon.',
    model: '    <div class="ui icon message">\n' +
      '      <i class="notched circle loading icon"></i>\n' +
      '      <div class="content">\n' +
      '        <div class="header">\n' +
      '          Just one second\n' +
      '        </div>\n' +
      '        <p>We\'re fetching that content for you.</p>\n' +
      '      </div>\n' +
      '    </div>\n',
  },
};
</script>
