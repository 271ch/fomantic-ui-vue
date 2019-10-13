<template>
  <div>
    <div class="ui icon message">
      <i class="notched circle loading icon"/>
      <div class="content">
        <div class="header">
          Just one second
        </div>
        <p>We're fetching that content for you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionMessageIconMessage2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'message',
      title1: 'Types',
      title2: 'Icon Message',
      description: 'A message can contain an icon.',
      model: '    <div class="ui icon message">\n' +
      '      <i class="notched circle loading icon"/>\n' +
      '      <div class="content">\n' +
      '        <div class="header">\n' +
      '          Just one second\n' +
      '        </div>\n' +
      '        <p>We\'re fetching that content for you.</p>\n' +
      '      </div>\n' +
      '    </div>\n',
    };
  },
};
</script>
