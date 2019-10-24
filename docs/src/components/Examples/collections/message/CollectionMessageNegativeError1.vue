<template>
  <div>
    <FuiMessage negative iconName=close header="We're sorry we can't apply that discount">
      <p>That offer has expired</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageNegativeError1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Negative / Error',
    description: 'A message may be formatted to display a negative message.',
    model: '    <div class="ui negative message">\n' +
      '      <i class="close icon"></i>\n' +
      '      <div class="header">\n' +
      '        We\'re sorry we can\'t apply that discount\n' +
      '      </div>\n' +
      '      <p>That offer has expired</p>\n' +
      '    </div>\n',
  },
};
</script>
