<template>
  <div>
    <div class="ui link list">
      <div class="active item">Home</div>
      <a class="item">About</a>
      <a class="item">Jobs</a>
      <a class="item">Team</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementListLink1',
  data: function () {
    return {
      converted: false,
      elementType: 'elements',
      element: 'list',
      title1: 'Types',
      title2: 'Link',
      description: 'A list can be specially formatted for navigation links',
      model: '    <div class="ui link list">\n' +
      '      <div class="active item">Home</div>\n' +
      '      <a class="item">About</a>\n' +
      '      <a class="item">Jobs</a>\n' +
      '      <a class="item">Team</a>\n' +
      '    </div>\n',
    };
  },
};
</script>
