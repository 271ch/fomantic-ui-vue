<template>
  <div>
    <FuiMessage success iconName=close header="Your user registration was successful.">
      <p>You may now log-in with the username you have chosen</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessagePositiveSuccess2',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Positive / Success',
    description: 'A message may be formatted to display a positive message.',
    model: '    <div class="ui success message">\n' +
      '      <i class="close icon"></i>\n' +
      '      <div class="header">\n' +
      '        Your user registration was successful.\n' +
      '      </div>\n' +
      '      <p>You may now log-in with the username you have chosen</p>\n' +
      '    </div>\n',
  },
};
</script>
