<template>
  <div>
    <FuiMessage floating>
      <p>Way to go!</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageFloating1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Floating',
    description: 'A message can float above content that it is related to',
    model: '    <div class="ui floating message">\n' +
      '      <p>Way to go!</p>\n' +
      '    </div>\n',
  },
};
</script>
