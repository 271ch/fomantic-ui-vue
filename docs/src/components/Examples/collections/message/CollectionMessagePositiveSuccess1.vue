<template>
  <div>
    <b class="ignored">
      <i class="attention icon"></i>
      Positive/Success and Negative/Error messages by default use similar colors, but each has their own color  variables that can be distinguished in your theme.
    </b>
    <div class="ui positive message">
      <i class="close icon"></i>
      <div class="header">
        You are eligible for a reward
      </div>
      <p>Go to your <b>special offers</b> page to see now.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessagePositiveSuccess1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Positive / Success',
    description: 'A message may be formatted to display a positive message.',
    model: '    <b class="ignored">\n' +
      '      <i class="attention icon"></i>\n' +
      '      Positive/Success and Negative/Error messages by default use similar colors, but each has their own color  variables that can be distinguished in your theme.\n' +
      '    </b>\n' +
      '    <div class="ui positive message">\n' +
      '      <i class="close icon"></i>\n' +
      '      <div class="header">\n' +
      '        You are eligible for a reward\n' +
      '      </div>\n' +
      '      <p>Go to your <b>special offers</b> page to see now.</p>\n' +
      '    </div>\n',
  },
};
</script>
