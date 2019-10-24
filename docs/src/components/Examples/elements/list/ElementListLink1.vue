<template>
  <div>
    <FuiList link>
      <FuiItem active>Home</FuiItem>
      <FuiItem tag=a>About</FuiItem>
      <FuiItem tag=a>Jobs</FuiItem>
      <FuiItem tag=a>Team</FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListLink1',
  info: {
    converted: true,
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
  },
};
</script>
