<template>
  <div>
    <div class="ui message">
      <div class="header">
        Changes in Service
      </div>
      <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageMessage1',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Types',
      title2: 'Message',
      description: 'A basic message',
      model: '    <div class="ui message">\n' +
      '      <div class="header">\n' +
      '        Changes in Service\n' +
      '      </div>\n' +
      '      <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>\n' +
      '    </div>\n',
    };
  },
};
</script>
