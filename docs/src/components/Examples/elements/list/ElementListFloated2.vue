<template>
  <div>
    <FuiList floated=right horizontal>
      <FuiItem disabled href="#">© GitHub, Inc.</FuiItem>
      <FuiItem tag=a href="#">Terms</FuiItem>
      <FuiItem tag=a href="#">Privacy</FuiItem>
      <FuiItem tag=a href="#">Contact</FuiItem>
    </FuiList>
    <FuiList horizontal>
      <FuiItem tag=a href="#">About Us</FuiItem>
      <FuiItem tag=a href="#">Jobs</FuiItem>
    </FuiList>
  </div>
</template>

<script>
export default {
  name: 'ElementListFloated2',
  info: {
    converted: true,
    elementType: 'elements',
    element: 'list',
    title1: 'Content Variations',
    title2: 'Floated',
    description: 'An list, or an element inside a list can be floated left or right',
    model: '    <div class="ui right floated horizontal list">\n' +
      '      <div class="disabled item" href="#">© GitHub, Inc.</div>\n' +
      '      <a class="item" href="#">Terms</a>\n' +
      '      <a class="item" href="#">Privacy</a>\n' +
      '      <a class="item" href="#">Contact</a>\n' +
      '    </div>\n' +
      '    <div class="ui horizontal list">\n' +
      '      <a class="item" href="#">About Us</a>\n' +
      '      <a class="item" href="#">Jobs</a>\n' +
      '    </div>\n',
  },
};
</script>
