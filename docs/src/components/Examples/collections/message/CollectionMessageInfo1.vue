<template>
  <div>
    <div class="ui info message">
      <i class="close icon"/>
      <div class="header">
        Was this what you wanted?
      </div>
      <ul class="list">
        <li>It's good to see you again.</li>
        <li>Did you know it's been a while?</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageInfo1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Variations',
      title2: 'Info',
      description: 'A message may be formatted to display information.',
      model: '    <div class="ui info message">\n' +
      '      <i class="close icon"/>\n' +
      '      <div class="header">\n' +
      '        Was this what you wanted?\n' +
      '      </div>\n' +
      '      <ul class="list">\n' +
      '        <li>It\'s good to see you again.</li>\n' +
      '        <li>Did you know it\'s been a while?</li>\n' +
      '      </ul>\n' +
      '    </div>\n',
    };
  },
};
</script>
