<template>
  <div>
    <FuiMessage positive iconName=close header="You are eligible for a reward">
      <p>Go to your <b>special offers</b> page to see now.</p>
    </FuiMessage>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessagePositiveSuccess1',
  info: {
    converted: true,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Positive / Success',
    description: 'A message may be formatted to display a positive message.',
    model: '    <div class="ui positive message">\n' +
      '      <i class="close icon"></i>\n' +
      '      <div class="header">\n' +
      '        You are eligible for a reward\n' +
      '      </div>\n' +
      '      <p>Go to your <b>special offers</b> page to see now.</p>\n' +
      '    </div>\n',
  },
};
</script>
