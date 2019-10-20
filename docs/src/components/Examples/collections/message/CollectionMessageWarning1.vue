<template>
  <div>
    <div class="ui warning message">
      <i class="close icon"></i>
      <div class="header">
        You must register before you can do that!
      </div>
      Visit our registration page, then try again
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageWarning1',
  info: {
    converted: false,
    elementType: 'collections',
    element: 'message',
    title1: 'Variations',
    title2: 'Warning',
    description: 'A message may be formatted to display warning messages.',
    model: '    <div class="ui warning message">\n' +
      '      <i class="close icon"></i>\n' +
      '      <div class="header">\n' +
      '        You must register before you can do that!\n' +
      '      </div>\n' +
      '      Visit our registration page, then try again\n' +
      '    </div>\n',
  },
};
</script>
