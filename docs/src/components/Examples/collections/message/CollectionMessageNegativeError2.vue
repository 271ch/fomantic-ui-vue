<template>
  <div>
    <div class="ui error message">
      <i class="close icon"/>
      <div class="header">
        There were some errors with your submission
      </div>
      <ul class="list">
        <li>You must include both a upper and lower case letters in your password.</li>
        <li>You need to select your home country.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageNegativeError2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Variations',
      title2: 'Negative / Error',
      description: 'A message may be formatted to display a negative message.',
      model: '    <div class="ui error message">\n' +
      '      <i class="close icon"/>\n' +
      '      <div class="header">\n' +
      '        There were some errors with your submission\n' +
      '      </div>\n' +
      '      <ul class="list">\n' +
      '        <li>You must include both a upper and lower case letters in your password.</li>\n' +
      '        <li>You need to select your home country.</li>\n' +
      '      </ul>\n' +
      '    </div>\n',
    };
  },
};
</script>
