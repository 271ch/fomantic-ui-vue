<template>
  <div>
    <div class="ui list">
      <a class="item">What is a FAQ?</a>
      <a class="item">Who is our user?</a>
      <a class="item">Where is our office located?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListLink1A',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Content',
      title2: 'Link',
      description: 'A list can contain links',
      model: '    <div class="ui list">\n' +
      '      <a class="item">What is a FAQ?</a>\n' +
      '      <a class="item">Who is our user?</a>\n' +
      '      <a class="item">Where is our office located?</a>\n' +
      '    </div>\n',
    };
  },
};
</script>
